function createCamera(scene,canvas){
 // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(1, 1,2), scene);
camera.applyGravity=true
camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    // Target the camera to scene origin.
    camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    camera.attachControl(canvas, false);
camera.checkCollisions = true;



}

function createLight(scene){
    
var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1,1,0), scene);
}

function createSphere(scene){
    
 var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);
 sphere.position.y = 1;
     sphere.position.x = 0;
      sphere.position.z= 0;
var sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", scene);
sphereMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
//sphereMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
sphereMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
sphereMaterial.diffuseColor = new BABYLON.Color3(1, 0, .5);
sphere.material=sphereMaterial
sphere.checkCollisions = true;
}
