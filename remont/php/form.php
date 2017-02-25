<?PHP

// если была нажата кнопка "Отправить"
if($_POST['submit']) {
    $name = substr(htmlspecialchars(trim($_POST['name']:'')), 0, 1000);
        $phone =  substr(htmlspecialchars(trim($_POST['phone']:'')), 0, 1000000);
        // $to - кому отправляем
        $to = 'kachalo.svetlana@gmail.com';
       
        // функция, которая отправляет наше письмо
        mail($to, $name, $phone);
        echo 'Спасибо! Ваше письмо отправлено.';
}
?>