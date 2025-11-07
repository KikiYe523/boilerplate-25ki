import * as THREE from 'three'

export const addTorusKnot = () => {
    const geometry = new THREE.TorusKnotGeometry(0.4, 0.1, 100, 8)
    const torusKnotMaterial = new THREE.TorusKnotGeometry({color: 0x00ff00})
    const torusKnotMesh = new THREE.Mesh(geometry, torusKnotMaterial)
    torusKnotMesh.position.set(2,0,0)
    return torusKnotMesh
}