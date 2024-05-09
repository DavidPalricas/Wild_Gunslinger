import * as THREE from "three";
import { createObjects } from "./create_objects.js";

export function create_Enemy() {

   
    let body_color = 0x800000; //Vermelho Escuro;
    let leg_color = 0x000000; //Preto
    
    //Cabeça do humano
    const head_geometry = new THREE.SphereGeometry(3);
    const head_material = new THREE.MeshToonMaterial({ color: 0xCFFE0BD }); // Cor de pele Caucasiana
    const head = new THREE.Mesh(head_geometry, head_material);


    //Olhos do humano
    const left_eye_geometry = new THREE.SphereGeometry(0.5);
    const left_eye_material = new THREE.MeshToonMaterial({ color: 0xFFFFFF }); // Branco
    const left_eye = new THREE.Mesh(left_eye_geometry, left_eye_material);
    const right_eye = left_eye.clone();


    //Iris do humano
    const left_iris_geometry = new THREE.SphereGeometry(0.3);
    const left_iris_material = new THREE.MeshToonMaterial({ color: 0xA1CAF1 }); // Azul bebé
    const left_iris = new THREE.Mesh(left_iris_geometry, left_iris_material);
    const right_iris = left_iris.clone();

    // Pulupilas do humano
    const left_pupil_geometry = new THREE.SphereGeometry(0.15);
    const left_pupil_material = new THREE.MeshToonMaterial({ color: 0x000000 }); // Preto
    const left_pupil = new THREE.Mesh(left_pupil_geometry, left_pupil_material);
    const right_pupil = left_pupil.clone();



    // Bandana do Golden Skull
    const bandana_geometry = new THREE.CylinderGeometry(2, 2, 3);
    const bandana_material = new THREE.MeshToonMaterial({ color: 0xE5B80B }); //Mesma cor que a fita
    const bandana = new THREE.Mesh(bandana_geometry, bandana_material);

    //Corpo do humano
    const body_geometry = new THREE.CylinderGeometry(2, 2, 5.8);
    const body_material = new THREE.MeshToonMaterial({ color: body_color });
    const body = new THREE.Mesh(body_geometry, body_material);
   
    //Pernas do humano
    const left_leg_geometry = new THREE.CylinderGeometry(1.5, 1.5, 5);
    const left_leg_material = new THREE.MeshToonMaterial({ color: leg_color });
    const left_leg = new THREE.Mesh(left_leg_geometry, left_leg_material);
    const right_leg = left_leg.clone();

    //Braços do humano
    const left_arm_geometry = new THREE.CylinderGeometry(1, 1, 7);
    const left_arm_material = new THREE.MeshToonMaterial({ color: body_color }); //A cor dos braços é a mesma do corpo
    const left_arm = new THREE.Mesh(left_arm_geometry, left_arm_material);
    const right_arm = left_arm.clone();

    //Sapatos do humano
    const left_shoe_geometry = new THREE.BoxGeometry(0.5, 3, 3);
    const left_shoe_material = new THREE.MeshToonMaterial({ color: 0x964B00 }); // Castanho
    const left_shoe = new THREE.Mesh(left_shoe_geometry, left_shoe_material);
    const right_shoe = left_shoe.clone();


    const hat = createObjects("hat",4,8,"game","enemy");



    
    hat.scale.set(1.6, 1.6, 1.6);


    // Definir a posição e orientação dos diferentes elementos do humano
    head.position.y = 14.3;

    hat.position.set(head.position.x , head.position.y - 12 , head.position.z);
    

    left_eye.position.set(head.position.x + 2, head.position.y - 13, head.position.z + 1.5);
    right_eye.position.set(left_eye.position.x, left_eye.position.y, -left_eye.position.z);

    left_iris.position.set(left_eye.position.x -1.6 , left_eye.position.y -1.2, left_eye.position.z - 1.5 );
    right_iris.position.set(right_eye.position.x  - 1.6, right_eye.position.y -1.2, right_eye.position.z +1.5);

    left_pupil.position.set(left_iris.position.x - 0.2, left_iris.position.y - 0.1, left_iris.position.z);
    right_pupil.position.set(right_iris.position.x -0.2, right_iris.position.y - 0.1, right_iris.position.z);
    
    bandana.position.set(head.position.x + 1.5, head.position.y - 15.5, head.position.z);

    body.position.y = 8.5;

    left_leg.position.set(0, 3, 1);
    right_leg.position.set(0, 3, -1);

    left_arm.position.set(3.5, 10, 2.5);
    left_arm.rotation.z = Math.PI / 2;
    right_arm.position.set(3.5, 10, -2.5);
    right_arm.rotation.z = Math.PI / 2;




    /*
    let grip_color = 0x000000; //Preto
    let revolver_color = "rgb(89.6,89.6,89.6)"; //Prateado  ambiente brilhante
    */

    left_shoe.position.set(left_leg.position.x, 0, left_leg.position.z);
    right_shoe.position.set(right_leg.position.x, 0, right_leg.position.z);

    left_shoe.rotation.z = Math.PI / 2;
    right_shoe.rotation.z = Math.PI / 2;

    const enemy = new THREE.Group();
    

    left_iris.add(left_pupil);
    right_iris.add(right_pupil);
    left_eye.add(left_iris);
    right_eye.add(right_iris);

    head.add(hat);
    head.add(left_eye);
    head.add(right_eye);
    head.add(bandana)
    enemy.add(head);

 

    


    enemy.add(body);
    enemy.add(left_leg);
    enemy.add(right_leg);
    enemy.add(left_arm);
    enemy.add(right_arm);
    enemy.add(left_shoe);
    enemy.add(right_shoe);

    const revolver =  createObjects("revolver",5,8);
   

    


        // Luvas do humano
        const left_glove_geometry = new THREE.SphereGeometry(1);
        const left_glove_material = new THREE.MeshToonMaterial({ color: 0x000000 }); // Preto
        const left_glove = new THREE.Mesh(left_glove_geometry, left_glove_material);
        const right_glove = left_glove.clone();

       


        left_glove.position.set(left_arm.position.x + 3.5, left_arm.position.y, left_arm.position.z);
        right_glove.position.set(right_arm.position.x + 3.5, right_arm.position.y, right_arm.position.z);

        revolver.position.set(right_glove.position.x + 2, right_glove.position.y, right_glove.position.z + 0.3);




     
        enemy.add(left_glove);
        enemy.add(right_glove);

    

    enemy.add(revolver);





    enemy.receiveShadow = true;

    enemy.rotation.y = Math.PI ;

    return enemy;

}
