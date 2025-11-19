// Three.js 3D Scene for SwagaCraft

class MinecraftScene {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.mesh = null;
        this.isInitialized = false;
        
        this.init();
    }

    init() {
        if (!this.container) return;
        
        // Create scene
        this.scene = new THREE.Scene();
        
        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 5;
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        
        // Create Minecraft-like cube
        this.createMinecraftCube();
        
        // Add lights
        this.addLights();
        
        // Handle window resize
        this.handleResize();
        
        // Start animation
        this.animate();
        
        this.isInitialized = true;
    }

    createMinecraftCube() {
        // Create a textured cube resembling a Minecraft block
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        
        // Create materials for each face (simplified Minecraft grass block)
        const materials = [
            new THREE.MeshLambertMaterial({ color: 0x4CAF50 }), // Top (grass)
            new THREE.MeshLambertMaterial({ color: 0x795548 }), // Bottom (dirt)
            new THREE.MeshLambertMaterial({ color: 0x8BC34A }), // Right
            new THREE.MeshLambertMaterial({ color: 0x8BC34A }), // Left
            new THREE.MeshLambertMaterial({ color: 0x8BC34A }), // Front
            new THREE.MeshLambertMaterial({ color: 0x8BC34A })  // Back
        ];
        
        this.mesh = new THREE.Mesh(geometry, materials);
        this.scene.add(this.mesh);
    }

    addLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        // Directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        this.scene.add(directionalLight);
        
        // Point light for glow effect
        const pointLight = new THREE.PointLight(0x4CAF50, 0.5, 100);
        pointLight.position.set(0, 0, 5);
        this.scene.add(pointLight);
    }

    handleResize() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        if (!this.isInitialized) return;
        
        requestAnimationFrame(() => this.animate());
        
        // Rotate cube
        if (this.mesh) {
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.01;
        }
        
        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        if (this.renderer) {
            this.container.removeChild(this.renderer.domElement);
            this.renderer.dispose();
        }
    }
}

// Initialize Three.js scene
function initialize3DScene() {
    // Check if Three.js is available
    if (typeof THREE !== 'undefined') {
        const scene = new MinecraftScene('threejs-container');
    } else {
        console.warn('Three.js not loaded - 3D scene disabled');
    }
}

// Export for global access
window.MinecraftScene = MinecraftScene;
window.initialize3DScene = initialize3DScene;