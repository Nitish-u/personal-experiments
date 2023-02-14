<?php
$con="mysqli_connect('localhost','root','','ujwal')";
if(isset($_POST["submit"])){
    $query="INSERT INTO first (`name`, `email`, `phone`, `message`) VALUES ('$_POST[name]', '$_POST[email]', '$_POST[num]', '$_POST[msg]')";
    (mysqli_query($con,$query));
    // {
    //     <script>
    //     echo "alert('DATA TRANFER SUCCESSSFULLY')";
    //     </script>
    // }
    // else{
    //     <script>
    //     echo "alert('COUDN'T TRANSFER')";
    //     </script>
    // }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: bolder;
    }
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }
    h1{
        color: green;
        font-size: 50px;
    }
    .main{
        display: flex;
        width: 60%;
        height: 60%;
    }
    .parent{
        padding: 20px 0 20px 20px;
        width: 70%;
    }
    #part-1{
        border-radius: 5px 0 0 5px;
        box-shadow: 0 0 5px gray;
        padding: 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .parent h2{
        color: green;
    }
    input{
        padding: 10px;
        font-weight: normal;
        border-radius: 5px;
    }
    .group-1{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 15px;
    }
    input:nth-child(2),input:nth-child(1){
        width: 50%;
    }
    input:nth-child(3){
        width: 100%;
    }
    input:nth-child(4){
        width: 100%;
        height: 100px;
    }
    button{
        background-color: green;
        padding: 10px;
        width: 30%;
        border: 1px solid green;
        border-radius: 5px;
        color: white;
        margin: 0 auto;
    }
    #part-2{
        box-shadow: 0 0 2px green;
        width: 30%;
        color: white;
        background-color: green;
        display: flex;
        gap: 15px;
        flex-direction: column;
        padding: 100px 50px;
    }
</style>
<body>
    <div>
        <h1>Contact Us!</h1>
    </div>
    <div class="main">
        <div class="parent">
            <div id="part-1">
                <h2>Get in touch</h2>   
                <span class="group-1">
                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="email" placeholder="Email">
                </span>
                <input type="number" name="num"  placeholder="NUMBER">
                <input type="text" name="msg"  placeholder="Message">
                <input type="buttton" name="submit" class="button" value="button">
               </div>
        </div>
        <div id="part-2">
            <h2>Contact us</h2>
            <div class="parts">
               
                <span><strong>Address: </strong>PCTE group of institutes,jhande,near baddowal cantt station,ludhiana,Punjab,India.</span>
            </div>
            <div class="parts">
               
                <span><strong>Phone: </strong>+917002435346</span>
            </div>
            <div class="parts">
               
                <span><strong>Email: </strong>info@Wootimer.com</span>
            </div>
            <div class="parts">
               
                <span><strong>Website: </strong>Wootimer.com</span>
            </div>
        </div>
    </div>
</body>
</html>