<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank management</title>
</head>

<body>
    <form method="post">
        <input type="number" placeholder="Enter account Number" name="acc"><br>
        <input type="text" placeholder="Enter your name (customer name)" name="name"><br>
        <input type="number" placeholder="Enter Balance amount" name="amt"><br>
        <select name="bnkType">
            <option value="*">--Select-Account-Type--</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
            <option value="business">Business</option>
        </select><br>
        <button type="submit" name="insert">Insert</button>
        <button type="submit" name="dlt">Delete</button>
    </form>
    <?php
    if(isset($_POST["insert"])){
        $acc = $_POST["acc"];
        $name = $_POST["name"];
        $amt = $_POST["amt"];
        $type = $_POST["bnkType"];
        $con = new mysqli("localhost","root","","bank");
        if($con){
            $cmd = "INSERT INTO `users` (`accNo`, `cusName`, `blnc`, `type`) VALUES ('$acc', '$name', '$amt', '$type');";
            if($con->query($cmd)){
                echo "data inserted";
            }else{
                echo "cmd error";
            }
        }else{
            echo "connection error";
        }
    }elseif(isset($_POST["dlt"])){
        $acc = $_POST["acc"];
        $con = new mysqli("localhost","root","","bank");
        if($con){
            $cmd = "DELETE FROM `users` WHERE accNo = $acc";
            if($con->query($cmd)){
                echo "Data deleted successfuly";
            }else{
                echo "cmd error";
            }
        }else{
            echo "connection error";
        }
    }
    ?>
</body>
</html>