// threejs init
import * as THREE from 'three';
import s from 'img/vendome.jpg'

function init(){
    const canvas = document.querySelector('.foreground')
    // create a scene
    const scene = new THREE.Scene();
    // create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // create geometry
    const geometry = new THREE.PlaneGeometry(window.innerWidth/2, window.innerHeight/2);
    // create texture loader

    const textureLoader = new THREE.TextureLoader()
    console.log(s)
    const colorTexture = textureLoader.load(s.src)
    console.log(colorTexture)
    // create mesh
    const material = new THREE.MeshBasicMaterial(
        // { color: 0xff0000 },
        { map: colorTexture }
        )
    const mesh = new THREE.Mesh(geometry, material)
    
    camera.position.z = 1
    
    scene.add(mesh)
    scene.add(camera)

    window.addEventListener('resize', () =>{
        // Update camera
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(window.innerWidth,  window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const renderer = new THREE.WebGLRenderer({
        canvas
    })
    renderer.setSize(window.innerWidth,  window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)   
}


export { init };