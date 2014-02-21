#pragma strict

var ROTATION_SPEED = 100;
var JUMP_HEIGHT = 8;

private var isFalling = false;

function Update () {


	var rotation: float = Input.GetAxis("Horizontal") * ROTATION_SPEED;
	rotation *= Time.deltaTime;
	rigidbody.AddRelativeTorque (Vector3.back * rotation);
	
	if(Input.GetKeyDown(KeyCode.W) && isFalling == false){
		
		rigidbody.velocity.y = JUMP_HEIGHT;
		
	}
	isFalling = true;

}
function OnCollisionStay(){
	isFalling = false;

}