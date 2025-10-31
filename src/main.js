import * as THREE from 'three'
import {addDefaultMeshes} from './addDefaultMeshes'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({antialias: true})
//let mesh

const meshes = {}
const clock = new THREE.Clock()
init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  //add our meshes into our container then add to scene
  meshes.default = addDefaultMeshes()
  // meshes.copy = addDefaultMeshes()
  meshes.copy2 = addDefaultMeshes()
  meshes.copy3 = addDefaultMeshes()
  // meshes.copy4 = addDefaultMeshes()
  // meshes.copy5 = addDefaultMeshes()
  // meshes.copy6 = addDefaultMeshes()

  // meshes.copy.position.x = 0
  meshes.copy2.position.x = -2
  meshes.copy3.position.x = 2
  // meshes.copy4.position.y = -2
  // meshes.copy6.position.y = 0
  // meshes.copy5.position.y = 2
  //add to scene 
  scene.add(meshes.default)
  // scene.add(meshes.copy)
  scene.add(meshes.copy2)
  scene.add(meshes.copy3)
  // scene.add(meshes.copy4)
  // scene.add(meshes.copy5)
  // scene.add(meshes.copy6)
  
  // const geometry = new THREE.BoxGeometry(1,1,1)
  // const material = new THREE.MeshBasicMaterial({color:0XFF00})
  // const mesh = new THREE.Mesh(geometry, material)
  // mesh.position.x = -1.5
  // scene.add(mesh)
  animate()
}
function animate(){
  // mesh.position.x += 0.1
  // meshes.default.scale.x +=0.1
  // meshes.default.scale.y +=0.1
  meshes.default.position.x = Math.sin(clock.getElapsedTime())
  meshes.default.position.y = Math.sin(clock.getElapsedTime())

  meshes.copy2.position.x = Math.sin(clock.getElapsedTime()) * 4
  meshes.copy2.position.y = Math.sin(clock.getElapsedTime()) * 4

  meshes.copy3.position.x = Math.sin(clock.getElapsedTime() * 2) * 2.5
  meshes.copy3.position.x = Math.sin(clock.getElapsedTime() * 2) * 2.5
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}