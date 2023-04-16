// threejs init
import * as THREE from 'three';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function init(){
    
    const canvas = document.querySelector('.foreground')
    // create a scene
    const scene = new THREE.Scene();
    // create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // create geometry

    // TODO:get screen ratio from canvas
    const geometry = new THREE.PlaneGeometry(15, 8);
    // create texture loader

    // const textureLoader = new THREE.TextureLoader()
    // const texture = textureLoader.load(`vendome.jpg`)
    const image = new Image()
    const texture = new THREE.Texture(image)

    image.onload = async () =>{
        
        texture.needsUpdate = true
    }

    image.src = '/vendome.jpg'

    // the issue here is that the onload is been called before the image actually becomes loaded so the texture ends up not been loaded
    // this delay is to mitigate that
    await delay(1000);
    texture.needsUpdate = true
    // create mesh
    const material = new THREE.MeshBasicMaterial( { map: texture, alphaMap: texture })
    const mesh = new THREE.Mesh(geometry, material)
    
    camera.position.z = 5
    
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