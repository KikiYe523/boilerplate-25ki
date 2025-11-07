import * as THREE from 'three'
//we take in a color and set a default for now, but also have a new 
//notation {xPos = 0, yPos = 0, zPos = 0, color = 0xff0000,} = {}
//these extra brackets are called option objects and make it 
//so that we can pass in partial data. IE we don't need to pass in x, y, z
//then color, we can just pass in zPos, or color etc we don't need 
//all 4 every time. 
export const addSphereMeshes = ({
	xPos = 0,
	yPos = 0,
	zPos = 0,
	color = 0xff0000,
} = {}) => {
	const geometry = new THREE.SphereGeometry(0.5, 32, 32)
	//similar to our positions we need to use the color variable passed in
	const material = new THREE.MeshBasicMaterial({ color: color })
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.set(xPos, yPos, zPos)
	return mesh
}