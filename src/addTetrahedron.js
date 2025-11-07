import * as THREE from 'three'

export const addTetrahedron = () => {
    const geometry = new THREE.TetrahedronGeometry()
    const TetrahedronMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})
    const TetrahedronMesh = new THREE.Mesh(geometry, TetrahedronMaterial)
    TetrahedronMesh.position.set(2,0,0)
    return TetrahedronMesh
}