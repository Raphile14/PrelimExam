let scene, camera, renderer, mesh;
let meshFloor, ambientLight, light, controls;
 
let keyboard = {};
let player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
let USE_WIREFRAME = false;
 
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
 
    // BACKGROUND
    const bg = new THREE.TextureLoader();
    bg.load('assets/textures/sky3.jpg' , function(texture) {
        scene.background = texture;  
    });

    // TEXTURES 
    let texture = new THREE.TextureLoader().load( 'assets/textures/grass.png' );
    let textureStairs = new THREE.TextureLoader().load( 'assets/textures/stairs.jpg' );
    let textureDoor = new THREE.TextureLoader().load( 'assets/textures/door.png' );
    let textureDirtRoad = new THREE.TextureLoader().load( 'assets/textures/dirtRoad.jpg' );
    let textureRoad = new THREE.TextureLoader().load( 'assets/textures/road.jpg' );
    let textureProp = new THREE.TextureLoader().load( 'assets/textures/prop.jpg' );
    let textureHead = new THREE.TextureLoader().load( 'assets/textures/head.jpg' );
    let textureGround = new THREE.TextureLoader().load( 'assets/textures/grassGround.jpg' );
    let textureMill = new THREE.TextureLoader().load( 'assets/textures/mill.jpg' );
    let textureGlass = new THREE.TextureLoader().load( 'assets/textures/glass.png' );
    let textureRedWool = new THREE.TextureLoader().load( 'assets/textures/redWool.png' );
    let textureWhiteWool = new THREE.TextureLoader().load( 'assets/textures/whiteWool.png' );
    let textureCabinet = new THREE.TextureLoader().load( 'assets/textures/cabinet.jfif' );

    // Materials
    let material = new THREE.MeshLambertMaterial( { map: texture } );
    let materialCabinet = new THREE.MeshStandardMaterial( { map: textureCabinet } );
    let materialStairs = new THREE.MeshLambertMaterial( { map: textureStairs } );
    let materialRedWool = new THREE.MeshStandardMaterial( { map: textureRedWool } );
    let materialWhiteWool = new THREE.MeshStandardMaterial( { map: textureWhiteWool } );
    let materialDoor = new THREE.MeshStandardMaterial( { map: textureDoor } );
    let materialRoad = new THREE.MeshLambertMaterial( { map: textureRoad } );
    let materialDirtRoad = new THREE.MeshLambertMaterial( { map: textureDirtRoad } );
    let materialProp = new THREE.MeshLambertMaterial( { map: textureProp } );
    let materialHead = new THREE.MeshLambertMaterial( { map: textureHead } );
    let materialGround = new THREE.MeshLambertMaterial( { map: textureGround } );
    let materialMill = new THREE.MeshLambertMaterial( { map: textureMill } );
    let materialGlass = new THREE.MeshPhongMaterial( { map: textureGlass, transparent: true, opacity: 0.5 } );
    let materialColor = new THREE.MeshLambertMaterial( { color: 0xffffff } );

    // ==========================  OBJECTS ==========================
    // Ground
    const widthGround = 50;
    const heightGround = 50;
    const widthSegmentsGround = 2;
    const heightSegmentsGround = 2;
    const geometryGround = new THREE.PlaneBufferGeometry(widthGround, heightGround, widthSegmentsGround, heightSegmentsGround);
    let ground = new THREE.Mesh( geometryGround, materialGround );
    ground.receiveShadow = true;
    ground.castShadow = true;
    scene.add( ground );
    ground.position.y = -1; 
    ground.rotation.x = -1.575;

    let ground2 = new THREE.Mesh( geometryGround, materialGround );
    ground2.receiveShadow = true;
    ground2.castShadow = true;
    scene.add( ground2 );
    ground2.position.y = -1; 
    ground2.rotation.x = -1.575;
    ground2.position.x = 50;

    let ground3 = new THREE.Mesh( geometryGround, materialGround );
    ground3.receiveShadow = true;
    ground3.castShadow = true;
    scene.add( ground3 );
    ground3.position.y = -1; 
    ground3.rotation.x = -1.575;
    ground3.position.x = -50;

    let ground4 = new THREE.Mesh( geometryGround, materialGround );
    ground4.receiveShadow = true;
    ground4.castShadow = true;
    scene.add( ground4 );
    ground4.position.y = -1; 
    ground4.rotation.x = -1.575;
    ground4.position.z = 50;

    let ground5 = new THREE.Mesh( geometryGround, materialGround );
    ground5.receiveShadow = true;
    ground5.castShadow = true;
    scene.add( ground5 );
    ground5.position.y = -1; 
    ground5.rotation.x = -1.575;
    ground5.position.x = 50;
    ground5.position.z = 50;

    let ground6 = new THREE.Mesh( geometryGround, materialGround );
    ground6.receiveShadow = true;
    ground6.castShadow = true;
    scene.add( ground6 );
    ground6.position.y = -1; 
    ground6.rotation.x = -1.575;
    ground6.position.x = -50;
    ground6.position.z = 50;

    let ground7 = new THREE.Mesh( geometryGround, materialGround );
    ground7.receiveShadow = true;
    ground7.castShadow = true;
    scene.add( ground7 );
    ground7.position.y = -1; 
    ground7.rotation.x = -1.575;
    ground7.position.z = -50;

    let ground8 = new THREE.Mesh( geometryGround, materialGround );
    ground8.receiveShadow = true;
    ground8.castShadow = true;
    scene.add( ground8 );
    ground8.position.y = -1; 
    ground8.rotation.x = -1.575;
    ground8.position.x = 50;
    ground8.position.z = -50;

    let ground9 = new THREE.Mesh( geometryGround, materialGround );
    ground9.receiveShadow = true;
    ground9.castShadow = true;
    scene.add( ground9 );
    ground9.position.y = -1; 
    ground9.rotation.x = -1.575;
    ground9.position.x = -50;
    ground9.position.z = -50;

    // Road Horizontal
    const widthRoad = 150; //11.2
    const heightRoad = 1;
    const depthRoad = 10; // 15
    const geometryRoad = new THREE.BoxBufferGeometry(widthRoad, heightRoad, depthRoad);
    let cubeRoad = new THREE.Mesh( geometryRoad, materialDirtRoad );
    cubeRoad.receiveShadow = true;
    cubeRoad.castShadow = true;
    scene.add( cubeRoad );
    cubeRoad.position.y = -1; 
    cubeRoad.position.z = -25; 

    let cubeRoad2 = cubeRoad.clone();
    scene.add( cubeRoad2);
    cubeRoad2.position.y = -1; 
    cubeRoad2.position.z = 25; 

    // Road Vertical
    const widthRoadV = 10; //11.2
    const heightRoadV = 1;
    const depthRoadV = 150; // 15
    const geometryRoadV = new THREE.BoxBufferGeometry(widthRoadV, heightRoadV, depthRoadV);
    let cubeRoadV = new THREE.Mesh( geometryRoadV, materialDirtRoad );
    cubeRoadV.receiveShadow = true;
    cubeRoadV.castShadow = true;
    scene.add( cubeRoadV );
    cubeRoadV.position.y = -1.2; 
    cubeRoadV.position.x = -25; 

    let cubeRoadV2 = cubeRoadV.clone();
    scene.add( cubeRoadV2);
    cubeRoadV2.position.y = -1.2; 
    cubeRoadV2.position.x = 25; 
    
    
    // ==========================  HOUSE 1 ==========================
    // Room Foundation
    const width = 20.2; //11.2
    const height = 1;
    const depth = 25; // 15
    const geometry = new THREE.BoxBufferGeometry(width, height, depth);
    let cubeFoundation = new THREE.Mesh( geometry, materialRoad );
    cubeFoundation.receiveShadow = true;
    cubeFoundation.castShadow = true;
    scene.add( cubeFoundation );
    cubeFoundation.position.y = -0.5; 

    // Rotating Cube
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xff4444, wireframe:USE_WIREFRAME})
      );
      mesh.position.y = 2.5;
      mesh.position.x = -3;
      mesh.position.z = 3;
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);

    // Room Roof
    const widthRoof = 19;
    const heightRoof = 1;
    const depthRoof = 25;
    const geometryRoof = new THREE.BoxBufferGeometry(widthRoof, heightRoof, depthRoof);
    let cubeRoof = new THREE.Mesh( geometryRoof, materialRoad );
    cubeRoof.receiveShadow = true;
    cubeRoof.castShadow = true;
    cubeFoundation.add( cubeRoof );
    cubeRoof.position.y = 6.5;

    // Room Roof 2
    const widthRoof2 = 17;
    const heightRoof2 = 1;
    const depthRoof2 = 23;
    const geometryRoof2 = new THREE.BoxBufferGeometry(widthRoof2, heightRoof2, depthRoof2);
    let cubeRoof2 = new THREE.Mesh( geometryRoof2, materialRoad );
    cubeRoof2.receiveShadow = true;
    cubeRoof2.castShadow = true;
    cubeFoundation.add( cubeRoof2 );
    cubeRoof2.position.y = 7.5;

    // Room Roof 3
    const widthRoof3 = 15;
    const heightRoof3 = 1;
    const depthRoof3 = 21;
    const geometryRoof3 = new THREE.BoxBufferGeometry(widthRoof3, heightRoof3, depthRoof3);
    let cubeRoof3 = new THREE.Mesh( geometryRoof3, materialRoad );
    cubeRoof3.receiveShadow = true;
    cubeRoof3.castShadow = true;
    cubeFoundation.add( cubeRoof3 );
    cubeRoof3.position.y = 8.5;

    // Room Roof 4
    const widthRoof4 = 13;
    const heightRoof4 = 1;
    const depthRoof4 = 19;
    const geometryRoof4 = new THREE.BoxBufferGeometry(widthRoof4, heightRoof4, depthRoof4);
    let cubeRoof4 = new THREE.Mesh( geometryRoof4, materialRoad );
    cubeRoof4.receiveShadow = true;
    cubeRoof4.castShadow = true;
    cubeFoundation.add( cubeRoof4 );
    cubeRoof4.position.y = 9.5;

    // Room Roof 5
    const widthRoof5 = 11;
    const heightRoof5 = 1;
    const depthRoof5 = 17;
    const geometryRoof5 = new THREE.BoxBufferGeometry(widthRoof5, heightRoof5, depthRoof5);
    let cubeRoof5 = new THREE.Mesh( geometryRoof5, materialRoad );
    cubeRoof5.receiveShadow = true;
    cubeRoof5.castShadow = true;
    cubeFoundation.add( cubeRoof5 );
    cubeRoof5.position.y = 10.5;

    // Room Outside Step
    const widthStep = 3;
    const heightStep = 0.9;
    const depthStep = 3;
    const geometryStep = new THREE.BoxBufferGeometry(widthStep, heightStep, depthStep);
    let cubeFoundationStep = new THREE.Mesh( geometryStep, materialProp );
    cubeFoundationStep.receiveShadow = true;
    cubeFoundationStep.castShadow = true;
    cubeFoundation.add( cubeFoundationStep );
    cubeFoundationStep.position.y = -0.6; 
    cubeFoundationStep.position.z = -14; 

    // Room Bulb
    const widthBulb = 1;
    const heightBulb = 0.2;
    const depthBulb = 1;
    const geometryBulb = new THREE.BoxBufferGeometry(widthBulb, heightBulb, depthBulb);
    let cubeBulb = new THREE.Mesh( geometryBulb, materialProp );
    cubeBulb.receiveShadow = true;
    cubeBulb.castShadow = true;
    cubeFoundation.add( cubeBulb );
    cubeBulb.position.y = 6; 
    cubeBulb.position.x = -3; 

    let cubeBulb2 = cubeBulb.clone();
    cubeFoundation.add( cubeBulb2 );
    cubeBulb.position.y = 6; 
    cubeBulb.position.x = 6; 
    cubeBulb.position.z = 3; 

    // Room Wall 1
    const widthWall = 20;
    const heightWall = 7;
    const depthWall = 1;
    const geometryWall1 = new THREE.BoxBufferGeometry(widthWall, heightWall, depthWall);
    let cubeWall1 = new THREE.Mesh( geometryWall1, materialStairs );
    cubeWall1.receiveShadow = true;
    cubeWall1.castShadow = true;
    cubeFoundation.add( cubeWall1 );
    cubeWall1.position.y = 3.5; 
    cubeWall1.position.z = 11.8; 

    // Room Wall 2
    const geometryWall2 = new THREE.BoxBufferGeometry(widthWall, heightWall, depthWall);
    let cubeWall2 = new THREE.Mesh( geometryWall2, materialStairs );
    cubeWall2.receiveShadow = true;
    cubeWall2.castShadow = true;
    cubeFoundation.add( cubeWall2 );
    cubeWall2.position.y = 3.5; 
    cubeWall2.position.z = -7.5; 

    // Room Wall 3
    const widthWallLong = 1;
    const heightWallLong = 7;
    const depthWallLong = 11.5;
    const geometryWall3 = new THREE.BoxBufferGeometry(widthWallLong, heightWallLong, depthWallLong);
    let cubeWall3 = new THREE.Mesh( geometryWall3, materialStairs );
    cubeWall3.receiveShadow = true;
    cubeWall3.castShadow = true;
    cubeFoundation.add( cubeWall3 );
    cubeWall3.position.y = 3.5; 
    cubeWall3.position.x = 9;
    cubeWall3.position.z = 2.25;

    let interiorWall = cubeWall3.clone();
    cubeFoundation.add( interiorWall );    
    interiorWall.position.y = 3.5; 
    interiorWall.position.x = 3;
    interiorWall.position.z = 2.25;

    // Room Wall 4
    const geometryWall4 = new THREE.BoxBufferGeometry(widthWallLong, heightWallLong, depthWallLong);
    let cubeWall4 = new THREE.Mesh( geometryWall4, materialStairs );
    cubeWall4.receiveShadow = true;
    cubeWall4.castShadow = true;
    cubeFoundation.add( cubeWall4 );
    cubeWall4.position.y = 3.5; 
    cubeWall4.position.x = -9;
    cubeWall4.position.z = 2.25;

    // Window 1
    const widthWindow = 1;
    const heightWindow = 6;
    const depthWindow = 3;
    const geometryWindow1 = new THREE.BoxBufferGeometry(widthWindow, heightWindow, depthWindow);
    let cubeWindow1 = new THREE.Mesh( geometryWindow1, materialGlass );
    cubeWindow1.receiveShadow = true;
    cubeWindow1.castShadow = true;
    cubeFoundation.add( cubeWindow1 );
    cubeWindow1.position.y = 3; 
    cubeWindow1.position.x = -9;
    cubeWindow1.position.z = -5;

    // Window 2
    const geometryWindow2 = new THREE.BoxBufferGeometry(widthWindow, heightWindow, depthWindow);
    let cubeWindow2 = new THREE.Mesh( geometryWindow2, materialGlass );
    cubeWindow2.receiveShadow = true;
    cubeWindow2.castShadow = true;
    cubeFoundation.add( cubeWindow2 );
    cubeWindow2.position.y = 3; 
    cubeWindow2.position.x = 9;
    cubeWindow2.position.z = -5;

    // Window 3
    const geometryWindow3 = new THREE.BoxBufferGeometry(widthWindow, heightWindow, depthWindow);
    let cubeWindow3 = new THREE.Mesh( geometryWindow3, materialGlass );
    cubeWindow3.receiveShadow = true;
    cubeWindow3.castShadow = true;
    cubeFoundation.add( cubeWindow3 );
    cubeWindow3.position.y = 3; 
    cubeWindow3.position.x = 9;
    cubeWindow3.position.z = 9.5;

    // Interior Window 1
    let interiorWindow = cubeWindow3.clone();
    cubeFoundation.add( interiorWindow );
    cubeWindow3.position.y = 3; 
    cubeWindow3.position.x = 3;
    cubeWindow3.position.z = 9.5;

    // Interior Window 2
    const widthIntWindow = 5;
    const heightIntWindow = 6;
    const depthIntWindow = 1;
    const geometryIntWindow1 = new THREE.BoxBufferGeometry(widthIntWindow, heightIntWindow, depthIntWindow);
    let cubeIntWindow1 = new THREE.Mesh( geometryIntWindow1, materialGlass );
    cubeIntWindow1.receiveShadow = true;
    cubeIntWindow1.castShadow = true;
    cubeFoundation.add( cubeIntWindow1 );
    cubeIntWindow1.position.y = 3; 
    cubeIntWindow1.position.x = 6;
    cubeIntWindow1.position.z = -2.5;

    // Window 4
    const geometryWindow4 = new THREE.BoxBufferGeometry(widthWindow, heightWindow, depthWindow);
    let cubeWindow4 = new THREE.Mesh( geometryWindow4, materialGlass );
    cubeWindow4.receiveShadow = true;
    cubeWindow4.castShadow = true;
    cubeFoundation.add( cubeWindow4 );
    cubeWindow4.position.y = 3; 
    cubeWindow4.position.x = -9;
    cubeWindow4.position.z = 9.5;
    
    // Room Bed
    const widthBed = 3;
    const heightBed = 2;
    const depthBed = 5;
    const geometryBed = new THREE.BoxBufferGeometry(widthBed, heightBed, depthBed);
    let cubeBed = new THREE.Mesh( geometryBed, materialRedWool );
    cubeBed.receiveShadow = true;
    cubeBed.castShadow = true;
    cubeFoundation.add( cubeBed );
    cubeBed.position.y = 0.5; 
    cubeBed.position.z = 9;
    cubeBed.position.x = 6;    

    // Room Pillow
    const widthBedPillow = 1.5;
    const heightBedPillow = 1;
    const depthBedPillow = 1;
    const geometryBedPillow = new THREE.BoxBufferGeometry(widthBedPillow, heightBedPillow, depthBedPillow);
    let cubeBedPillow = new THREE.Mesh( geometryBedPillow, materialWhiteWool );
    cubeBedPillow.receiveShadow = true;
    cubeBedPillow.castShadow = true;
    cubeBed.add( cubeBedPillow );
    cubeBedPillow.position.y = 0.7; 
    cubeBedPillow.position.z = 1.5;

    // House Sofa
    const widthSofa = 5;
    const heightSofa = 2;
    const depthSofa = 3;
    const geometrySofa = new THREE.BoxBufferGeometry(widthSofa, heightSofa, depthSofa);
    let cubeSofa = new THREE.Mesh( geometrySofa, materialRedWool );
    cubeSofa.receiveShadow = true;
    cubeSofa.castShadow = true;
    cubeFoundation.add( cubeSofa );
    cubeSofa.position.y = 0.5; 
    cubeSofa.position.z = 10;
    cubeSofa.position.x = -3;    

    // Sofa Pillow
    const widthSofaPillow = 4.8;
    const heightSofaPillow = 3;
    const depthSogaPillow = 1;
    const geometrySofaPillow = new THREE.BoxBufferGeometry(widthSofaPillow, heightSofaPillow, depthSogaPillow);
    let cubeSofaPillow = new THREE.Mesh( geometrySofaPillow, materialWhiteWool );
    cubeSofaPillow.receiveShadow = true;
    cubeSofaPillow.castShadow = true;
    cubeSofa.add( cubeSofaPillow );
    cubeSofaPillow.position.y = 1; 
    cubeSofaPillow.position.z = 1;

    let cubeSofa2 = cubeSofa.clone();
    cubeFoundation.add( cubeSofa2 );
    cubeSofa2.position.y = 0.48; 
    cubeSofa2.position.z = 4;
    cubeSofa2.position.x = 0;  
    cubeSofa2.rotation.y = 1.2;

    let cubeSofa3 = cubeSofa.clone();
    cubeFoundation.add( cubeSofa3 );
    cubeSofa3.position.y = 0.48; 
    cubeSofa3.position.z = 4;
    cubeSofa3.position.x = -6;  
    cubeSofa3.rotation.y = -1;

    // Room Cabinet
    const widthCabinet = 1;
    const heightCabinet = 3.5;
    const depthCabinet = 3;
    const geometryCabinet = new THREE.BoxBufferGeometry(widthCabinet, heightCabinet, depthCabinet);
    let cubeCabinet = new THREE.Mesh( geometryCabinet, materialCabinet );
    cubeCabinet.receiveShadow = true;
    cubeCabinet.castShadow = true;
    cubeFoundation.add( cubeCabinet );
    cubeCabinet.position.y = 2.2; 
    cubeCabinet.position.x = 8;
    cubeCabinet.position.z = 2.25;    

    // Door
    const widthDoor = 2;
    const heightDoor = 5;
    const depthDoor = 1.5;
    const geometryDoor = new THREE.BoxBufferGeometry(widthDoor, heightDoor, depthDoor);
    let cubeDoor = new THREE.Mesh( geometryDoor, materialDoor );
    cubeDoor.receiveShadow = true;
    cubeDoor.castShadow = true;
    cubeFoundation.add( cubeDoor );
    cubeDoor.position.y = 3; 
    cubeDoor.position.z = -7.5; 

    let cubeDoor2 = cubeDoor.clone();
    cubeFoundation.add( cubeDoor2 );
    cubeDoor2.position.y = 3; 
    cubeDoor2.position.z = -2.5; 
    cubeDoor2.position.x = 6; 

    // Pillar 1
    const radiusTopPillar = 1;
    const radiusBottomPillar = 1;
    const heightPillar = 8;
    const radialSegmentsPillar = 12;
    const geometryPillar = new THREE.CylinderBufferGeometry(radiusTopPillar, radiusBottomPillar, heightPillar, radialSegmentsPillar);
    let cylinderPillar1 = new THREE.Mesh( geometryPillar, materialProp );
    cylinderPillar1.receiveShadow = true;
    cylinderPillar1.castShadow = true;
    cubeFoundation.add( cylinderPillar1 );
    cylinderPillar1.position.y = 3; 
    cylinderPillar1.position.z = 11.8; 
    cylinderPillar1.position.x = -9.5; 

    // Pillar 2
    let cylinderPillar2 = new THREE.Mesh( geometryPillar, materialProp );
    cylinderPillar2.receiveShadow = true;
    cylinderPillar2.castShadow = true;
    cubeFoundation.add( cylinderPillar2 );
    cylinderPillar2.position.y = 3; 
    cylinderPillar2.position.z = 11.8; 
    cylinderPillar2.position.x = 9.5; 

    // Pillar 3
    let cylinderPillar3 = new THREE.Mesh( geometryPillar, materialProp );
    cylinderPillar3.receiveShadow = true;
    cylinderPillar3.castShadow = true;
    cubeFoundation.add( cylinderPillar3 );
    cylinderPillar3.position.y = 3; 
    cylinderPillar3.position.z = -7.5; 
    cylinderPillar3.position.x = 9.5; 

    // Pillar 4
    let cylinderPillar4 = new THREE.Mesh( geometryPillar, materialProp );
    cylinderPillar4.receiveShadow = true;
    cylinderPillar4.castShadow = true;
    cubeFoundation.add( cylinderPillar4 );
    cylinderPillar4.position.y = 3; 
    cylinderPillar4.position.z = -7.5; 
    cylinderPillar4.position.x = -9.5;          
    
    // Other Houses
    let house2 = cubeFoundation.clone();
    house2.position.x = 50;
    scene.add(house2);

    let house3 = cubeFoundation.clone();
    house3.position.x = - 50;
    scene.add(house3);

    let house4 = cubeFoundation.clone();
    house4.position.x = 50;
    house4.position.z = 50;
    scene.add(house4);

    let house5 = cubeFoundation.clone();
    house5.position.x = -50;
    house5.position.z = 50;
    scene.add(house5);

    let house6 = cubeFoundation.clone();
    house6.position.x = 50;
    house6.position.z = -50;
    scene.add(house6);

    let house7 = cubeFoundation.clone();
    house7.position.z = 50;
    scene.add(house7);

    let house8 = cubeFoundation.clone();
    house8.position.z = -50;
    scene.add(house8);

    let house9 = cubeFoundation.clone();
    house9.position.x = -50;
    house9.position.z = -50;
    scene.add(house9);

    // LIGHTS   
    // Ambient Light
    ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    // Point Light
    sunLight = new THREE.PointLight(0xffb6c1, 2, 200);
    sunLight.position.set(0, 50,0);
    sunLight.castShadow = true;
    scene.add(sunLight);
    sunLightForward = true;

    // Spot Light
    let spotLight = new THREE.SpotLight( 0xFFFFFF, 2);
    spotLight.position.set( -3, 6, 1 );
    spotLight.target.position.set( 0, -100, 0);
    spotLight.castShadow = true;
    cubeFoundation.add( spotLight.target );
    cubeFoundation.add( spotLight );

    camera.position.set(0, player.height, -5);
    camera.lookAt(new THREE.Vector3(0,player.height,0));
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls (camera, renderer.domElement);
    animate();
}
 
function animate(){
   controls.update();
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.02;

   // Sunlight Movement Logic
   if (sunLight.position.x <= -400) {
      sunLight.position.x = 400;
   }
   sunLight.position.x -= 1;

   if(keyboard[87]){ // W key
      camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
      camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
   }
   if(keyboard[83]){ // S key
      camera.position.x += Math.sin(camera.rotation.y) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
   }
   if(keyboard[65]){ // A key
      camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
   }
   if(keyboard[68]){ // D key
      camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
   }

   if(keyboard[37]){ // left arrow key
      camera.rotation.y -= player.turnSpeed;
   }
   if(keyboard[39]){ // right arrow key
      camera.rotation.y += player.turnSpeed;
   }

   renderer.render(scene, camera);
}
 
function keyDown(event){
  keyboard[event.keyCode] = true;
}
 
function keyUp(event){
  keyboard[event.keyCode] = false;
}
 
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
 
window.onload = init;
