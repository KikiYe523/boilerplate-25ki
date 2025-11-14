import * as THREE from 'three'
import {addDefaultMeshes} from './addDefaultMeshes'
import {addSphereMeshes} from './addSphereMeshes'
import {addTorusKnot} from './addTorusKnot'
import {addTetrahedron} from './addTetrahedron'
import {addBasicMesh} from './addBasicMesh.js'
import {addStandardMesh} from './addStandardMesh.js'
import {addLight, addKeyLight, rimLight} from './addLight.js'
import {addPhongMesh} from './addPhongMesh.js'
import {MeshLambertMa} from './addmeshLambert.js'
import {addPhysicalMesh} from './addPhysicalMesh.js'
import { addTexturedMesh } from './addTexturedMeshes.js'
import Model from './model'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({antialias: true})

//let mesh
const meshes = {}
const lights = {}
const mixers = []
const clock = new THREE.Clock()

init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

  meshes.basic = addBasicMesh({xPos: 2 })
  meshes.standard = addStandardMesh({xPos: -2 })
  // meshes.texturedMesh = addTexturedMesh()


  lights.defaultLight = addLight()
  lights.keyLight = addKeyLight()
  lights.rimLight = rimLight()


  scene.add(meshes.basic)
  scene.add(meshes.standard)
  // scene.add(meshes.texturedMesh)
  scene.add(lights.defaultLight)
  scene.add(lights.keyLight)
  scene.add(lights.rimLight)

  instances()
	animate()
}
function instances() {
  const flowers = new Model({
  url: 'flower.glb',
  name: 'flower',
  scene: scene,
  meshes: meshes,
  scale: new THREE.Vector3(2,2,2),
  position: new THREE.Vector3(0,-0.8,3),
  animationState: true,
  mixers: mixers,
  })
 flowers.init();
}

function animate(){
  const delta = clock .getDelta()
  for(const mixer of mixers){
    mixer.update(delta)
  }

  Object.values(meshes). forEach((mesh)=>{ mesh.rotation.y += 0.01})
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  meshes.texturedMesh.material.displacementScale = 0.8 * Math.sin(clock.getElapsedTime() * 0.5)
}