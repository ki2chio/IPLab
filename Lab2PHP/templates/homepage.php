<?php include "include/header.php" ?>
<form action="/index.php?action=login" method="post">
    <div>
        <label for="login">Логін: </label>
        <input type="text" name="login" id="login">
    </div>
    <div>
        <label for="password">Пароль: </label>
        <input type="password" name="password" id="password">
    </div>
    <input type="submit" value="Увійти">
    <a href="/index.php?action=registration">Реєстрація</a>
</form>
<?php include "include/footer.php" ?>
