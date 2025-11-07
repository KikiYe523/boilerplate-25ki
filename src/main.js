import * as THREE from 'three'
import {addDefaultMeshes} from './addDefaultMeshes'
import {addSphereMeshes} from './addSphereMeshes'
// import {addTorusMeshes} from './addTorusMeshes'
import {addTorusKnot} from './addTorusKnot'
import {addTetrahedron} from './addTetrahedron'
import {addBasicMesh} from './addBasicMesh.js'
import {addStandardMesh} from './addStandardMesh.js'
import {addLight, addKeyLight, rimLight} from './addLight.js'
import {addPhongMesh} from './addPhongMesh.js'
import {MeshLambertMa} from './addmeshLambert.js'
import {addPhysicalMesh} from './addPhysicalMesh.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 5)
const renderer = new THREE.WebGLRenderer({antialias: true})

//let mesh
const meshes = {}
const lights = {}
const clock = new THREE.Clock()

init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	// meshes.sphere = addSphereMeshes({
	// 	xPos: 0,
	// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
	// })
  // meshes.sphere2 = addSphereMeshes({
	// 	xPos: 0,
	// 	color: new THREE.Color(Math.random(), Math.random(), Math.random()),
	// })

	// scene.add(meshes.sphere)
  // scene.add(meshes.sphere2)
  // scene.add(meshes.)
  meshes.basic = addBasicMesh()
  meshes.standard = addStandardMesh({xPos: 2 })
  meshes.phong = addPhongMesh({xPos: -2 })
  meshes.lambert = MeshLambertMa( {xPos: -4})
  meshes.physical = addPhysicalMesh({xPos: 4})
  // meshes.material2 = addPhysicalMesh()


  lights.default = addLight()
  lights.key = addKeyLight()
  lights.rim = rimLight()

  scene.add(meshes.basic)
  scene.add(meshes.standard)
  scene.add(lights.default)
  scene.add(lights.key)
  scene.add(lights.rim)
  scene.add(meshes.phong)
  scene.add(meshes.lambert)
  scene.add(meshes.physical)
  // scene.add(meshes.material2)

	animate()
  
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // document.body.appendChild(renderer.domElement)
  // //add our meshes into our container then add to scene
  // meshes.default = addDefaultMeshes()
  // meshes.torusKnot = addTorusKnot()
  // meshes.tetrahedron = addTetrahedron()

  // meshes.tetrahedron.position.set(4,-2,0)
  // meshes.torusKnot.position.set(-4,2,0)
  // // meshes.copy = addDefaultMeshes()
  // // meshes.copy2 = addDefaultMeshes()
  // // meshes.copy3 = addDefaultMeshes()
  // // meshes.copy4 = addDefaultMeshes()
  // // meshes.copy5 = addDefaultMeshes()
  // // meshes.copy6 = addDefaultMeshes()
  // // meshes.copy.position.x = 0
  // // meshes.copy2.position.x = -2
  // // meshes.copy3.position.x = 2
  // // meshes.copy4.position.y = -2
  // // meshes.copy6.position.y = 0
  // // meshes.copy5.position.y = 2
  // //add to scene 
  // scene.add(meshes.default)
  // scene.add(meshes.torusKnot)
  // scene.add(meshes.tetrahedron)
  // // // scene.add(meshes.copy)
  // // scene.add(meshes.copy2)
  // // scene.add(meshes.copy3)
  // // scene.add(meshes.copy4)
  // // scene.add(meshes.copy5)
  // // scene.add(meshes.copy6)
  
  // // const geometry = new THREE.BoxGeometry(1,1,1)
  // // const material = new THREE.MeshBasicMaterial({color:0XFF00})
  // // const mesh = new THREE.Mesh(geometry, material)
  // // mesh.position.x = -1.5
  // // scene.add(mesh)
  // animate()
}
function animate(){
  Object.values(meshes). forEach((mesh)=>{ mesh.rotation.y += 0.01})
  // meshes.sphere.position.y = Math.sin(clock.getElapsedTime()) * -0.1
  // request 
  // mesh.position.x += 0.1
  // meshes.default.scale.x +=0.1
  // meshes.default.scale.y +=0.1
  // meshes.default.position.x = Math.sin(clock.getElapsedTime())
  // meshes.default.position.y = Math.sin(clock.getElapsedTime())

  // meshes.copy2.position.x = Math.sin(clock.getElapsedTime()) * 4
  // meshes.copy2.position.y = Math.sin(clock.getElapsedTime()) * 4

  // meshes.copy3.position.x = Math.sin(clock.getElapsedTime() * 2) * Math.PI * 3/2
  // meshes.copy3.position.x = Math.sin(clock.getElapsedTime() * 2) + Math.PI * 3/2
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}