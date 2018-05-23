<?php
class User{
    public $login = null;
    public $password = null;
    public $age = null;
    public $phoneNumber = null;
    public $country = null;

    public function __construct( $data=array() ) {
        if (isset($data['login'])) $this->login = preg_replace("/[^\.\,\-\_\'\"\@\?\!\:\$ a-zA-Z0-9()]/", "", $data['login']);
        if (isset($data['password'])) $this->password = preg_replace("/[^\.\,\-\_\'\"\@\?\!\:\$ a-zA-Z0-9()]/", "", $data['password']);
        if (isset($data['age'])) $this->age = (int)$data['age'];
        if (isset($data['phoneNumber'])) $this->phoneNumber = preg_replace("/[^\.\,\-\_\'\"\@\?\!\:\$ a-zA-Z0-9()]/", "", $data['phoneNumber']);
        if (isset($data['country'])) $this->country = preg_replace("/[^\.\,\-\_\'\"\@\?\!\:\$ a-zA-Z0-9()]/", "", $data['country']);
    }

    public static function getByLogin( $login ) {
    $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
    $sql = "SELECT * FROM users WHERE login = :login";
    $st = $conn->prepare( $sql );
    $st->bindValue( ":login", $login, PDO::PARAM_STR);
    $st->execute();
    $row = $st->fetch();
    $conn = null;
    if ( $row ) return new User( $row );
  }

    public function insert() {
    $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
    $sql = "INSERT INTO users VALUES ( :login, :password, :age, :phoneNumber, :country )";
    $st = $conn->prepare ( $sql );
    $st->bindValue( ":login", $this->login, PDO::PARAM_STR );
    $st->bindValue( ":password", $this->password, PDO::PARAM_STR );
    $st->bindValue( ":age", $this->age, PDO::PARAM_INT );
    $st->bindValue( ":phoneNumber", $this->phoneNumber, PDO::PARAM_STR );
    $st->bindValue( ":country", $this->country, PDO::PARAM_STR );
    $st->execute();
    $conn = null;
  }

    public function update($oldLogin) {
    // Есть ли у объекта статьи ID?
    if ( is_null( $this->login ) ) trigger_error ( "User::update(): Attempt to update an User object that does not have its LOGIN property set.", E_USER_ERROR );
    $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
    $sql = "UPDATE users SET login=:login, password=:password, age=:age, phoneNumber=:phoneNumber, countr=:country WHERE login = :oldLogin";
    $st = $conn->prepare ( $sql );
    $st->bindValue( ":login", $this->login, PDO::PARAM_STR );
    $st->bindValue( ":password", $this->password, PDO::PARAM_STR );
    $st->bindValue( ":age", $this->age, PDO::PARAM_INT );
    $st->bindValue( ":phoneNumber", $this->phoneNumber, PDO::PARAM_STR );
    $st->bindValue( ":country", $this->country, PDO::PARAM_STR );
    $st->bindValue( ":oldLogin", $oldLogin, PDO::PARAM_STR );
    $st->execute();
    $conn = null;
  }

}