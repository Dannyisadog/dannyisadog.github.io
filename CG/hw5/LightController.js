class LightController {
    constructor(x, y, z, status, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.status = status;

        this.obj = this.makeButton(name, x, y, z);
        this.update();
    }

    switch() {
        this.status = !this.status;
        this.update();
    }
    update() {
        if (this.status) {
            this.obj.scale.set(1, 1, 1);
        } else {
            this.obj.scale.set(1, 2, 1);
        }
    }
    makeButton(name, x, y, z) {
        let mesh = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 3), new THREE.MeshPhongMaterial());
        let button = new THREE.Object3D();
        button.add(mesh);
        mesh.position.set(x, y, z);
        button.receiveShadow = true;
        button.name = name;  // a string
        return button;
    }
}