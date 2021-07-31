<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Welcome</title>
	<script src="Welcome.js"></script>
</head>
<body>
	<?php
	include 'DbAction.php';
	$users =getAllUsers();
	session_start();  

		$username = "";

		if (isset($_SESSION['username'])) {
  			$username= $_SESSION['username'];
		}

	?>

	<h1>Welcome, <?php echo $username ?></h1>
	<br>
		<input id="search" type="text" name="search" onkeyup="showUsers(this.value)" placeholder="search by username">

	<table id="userlist">
  <tr>
  	<th>ID</th>
  	<th>First Name</th>
  	<th>Last Name</th>
    <th>Username</th>
    <th>Email</th>
  </tr>
  <?php
  for ($i = 0; $i < sizeof($users);$i++) { ?>
  	 <tr>
  	 <td><?php echo $users[$i]["id"] ?></td>
  	 <td> <?php echo $users[$i]["firstname"] ?></td>
  	 <td> <?php echo $users[$i]["lastname"] ?></td>
     <td> <?php echo $users[$i]["username"] ?></td>
     <td><?php echo $users[$i]["email"] ?></td>
  <?php }  ?>
</table>

</body>
</html>