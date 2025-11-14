import * as THREE from 'three'

export const addTexturedMesh = () => {
    const tLoader = new THREE.TextureLoader()
    const color = tLoader.load('/t2/color.jpg') 
    const normal = tLoader.load('/t2/normal.jpg') 
    const ao = tLoader.load('/t2/ao.jpg') 
    const displace = tLoader.load('/t2/displace.png') 
    const roughness = tLoader.load('/t2/roughness.jpg')

    const geometry = new THREE.SphereGeometry(1, 256, 256)
    const material = new THREE.MeshPhysicalMaterial({
        //color: 0xff0000
        normalMap:normal,
        displacementMap: displace,
        displacementScale: 0.1,
        aoMap: ao,
        aoMapIntensity: 1,
        map: color,
        emissive: 0x0000ff,
        emissiveIntensity:0.1,
        metalness: 0.1,
        roughness: 0,
        transmission: 0.1,
        ior: 1,
    
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}
