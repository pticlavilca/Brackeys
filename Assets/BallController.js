#pragma strict

var ROTATION_SPEED = 100;



function Update () {


	var rotation: float = Input.GetAxis("Horizontal") * ROTATION_SPEED;
	rotation *= Time.deltaTime;
	rigidbody.AddRelativeTorque (Vector3.back * rotation);

}