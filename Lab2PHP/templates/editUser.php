<?php include "include/header.php" ?>
<a href="/index.php?action=logout">Вийти</a>
<form action="/index.php?action=edit" method="post">
    <div>
        <label for="login">Логін: </label>
        <input type="text" name="login" id="login" value="<?php echo $user->login?>">
    </div>
    <div>
        <label for="password">Старий пароль: </label>
        <input type="password" name="oldPassword" id="password">
    </div>
    <div>
        <label for="passwordN">Новий пароль: </label>
        <input type="password" name="newPassword" id="passwordN">
    </div>
    <div>
        <label for="age">Вік: </label>
        <input type="number" name="age" id="age" min="0" max="120" value="<?php echo $user->age?>">
    </div>
    <div>
        <label for="phoneNumber">Номер телефону: </label>
        <input type="text" name="phoneNumber" id="phoneNumber" value="<?php echo $user->phoneNumber?>">
    </div>
    <div>
        <label for="country">Країна: </label>
        <select id="country" name="country">
            <option value="Україна" <?php if($user->country == 'Україна')echo 'selected'?>>Україна</option>
            <option value="Білорусь" <?php if($user->country == 'Білорусь')echo 'selected'?>>Білорусь</option>
            <option value="Чехія" <?php if($user->country == 'Чехія')echo 'selected'?>>Чехія</option>
            <option value="Польща" <?php if($user->country == 'Польща')echo 'selected'?>>Польща</option>
        </select>
    </div>
    <input type="submit" name="save" value="Зберегти">
    <input type="submit" name="cancel" value="Відмінити">
</form>
<?php include "include/footer.php" ?>
