const myNewModel = new Model ({
    url: 'bedroom.glb',
    scene: scene,
    meshes:meshes,
    name:'room',
    animationState: false,
    mixers: mixers,
    replace: false,
    replaceURL: '/mat.png',
    particleURL: '1.png',
    scale: new THREE.Vector(1,1,1),
    position: new THREE.Vector(0,1,0)
})