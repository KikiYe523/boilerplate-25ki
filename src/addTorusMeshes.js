import * as THREE from 'three'

export const addTorusMeshes = () => {
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff})
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial)
    torusMesh.position.set(-2,0,0)
    return torusMesh
}
