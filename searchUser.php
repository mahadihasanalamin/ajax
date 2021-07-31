<?php 
	include 'DbAction.php';
	if ($_GET['name']) {
		$name =$_GET['name'];

		$conn = connect();
		$stmt = $conn->prepare("SELECT id, firstname, lastname, username, email FROM users WHERE username LIKE CONCAT('%', ?, '%')");
		$stmt->bind_param("s", $name);
		$stmt->execute();
		$records = $stmt-> get_result();



 		if ($records->num_rows >0) {
 			$users = $records->fetch_all(MYSQLI_ASSOC);
		}
	}
	else{
		$users =getAllUsers();
	}
 ?>

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
<?php   } ?>

