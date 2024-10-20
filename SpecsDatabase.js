
// Function to format a phone's details
function formatPhone(phone) {
    return `
        <div class="phone-card">
            <h3>${phone.brand} ${phone.model}</h3>
            <p>Price: ₹${phone.price}</p>
            <p>Chipset: ${phone.chipset}</p>
            <p>RAM: ${phone.ram}</p>
            <p>Storage: ${phone.storage}</p>
            <p>Screen Size: ${phone.screenSize}</p>
            <p>Primary Camera: ${phone.primaryRearResolution}</p>
            <p>Front Camera: ${phone.frontCameraResolution}</p>
        </div>
    `;
}



document.getElementById('phone-preferences-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const minBudge = document.getElementById('min-budget').value;
    const maxBudge = document.getElementById('max-budget').value;
    const pGaming= document.getElementById('priority-gaming').value;
    const pPhoto = document.getElementById('priority-photography').value;
    const pSurfing = document.getElementById('priority-browsing').value;
    const pStorage = document.getElementById('priority-storage').value;

    // Process the form data (for demonstration purposes, we will log it)
    console.log('Minimum Budget:', minBudge);
    console.log('Maximum Budget:', maxBudge);
    console.log('Priority Gaming:', pGaming);
    console.log('Priority Photography:', pPhoto);
    console.log('Priority Browsing:', pSurfing);
    console.log('Priority Storage:', pStorage);




let mobilePhones
= [
    // iPhone 14 Pro with different configurations
    {
        brand: "Apple",
        model: "iPhone 14 Pro 128GB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "12 MP",
        ram: "6 GB",
        chipset: "Apple A16 Bionic",
        storage: "128 GB",
        screenSize: "6.1 inches",
        batterySize: "3200 mAh",
        price: 129900,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 50,
        totalScore: 0
    },
    {
        brand: "Apple",
        model: "iPhone 14 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "12 MP",
        ram: "6 GB",
        chipset: "Apple A16 Bionic",
        storage: "256 GB",
        screenSize: "6.1 inches",
        batterySize: "3200 mAh",
        price: 139900,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 50,
        totalScore: 0

    },
    {
        brand: "Apple",
        model: "iPhone 14 Pro 512GB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "12 MP",
        ram: "6 GB",
        chipset: "Apple A16 Bionic",
        storage: "512 GB",
        screenSize: "6.1 inches",
        batterySize: "3200 mAh",
        price: 159900,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 50,
        totalScore: 0
        
    },
    {
        brand: "Apple",
        model: "iPhone 14 Pro 1TB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "12 MP",
        ram: "6 GB",
        chipset: "Apple A16 Bionic",
        storage: "1 TB",
        screenSize: "6.1 inches",
        batterySize: "3200 mAh",
        price: 179900,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 50,
        totalScore: 0
    },

    // Samsung Galaxy S22 Ultra with different configurations
    {
        brand: "Samsung",
        model: "Galaxy S22 Ultra 128GB",
        releaseYear: 2022,
        primaryRearResolution: "108 MP",
        frontCameraResolution: "40 MP",
        ram: "8 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "128 GB",
        screenSize: "6.8 inches",
        batterySize: "5000 mAh",
        price: 109999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 45,
        totalScore: 0
    },
    {
        brand: "Samsung",
        model: "Galaxy S22 Ultra 256GB",
        releaseYear: 2022,
        primaryRearResolution: "108 MP",
        frontCameraResolution: "40 MP",
        ram: "8 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "256 GB",
        screenSize: "6.8 inches",
        batterySize: "5000 mAh",
        price: 119999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 45,
        totalScore: 0
    },
    {
        brand: "Samsung",
        model: "Galaxy S22 Ultra 512GB",
        releaseYear: 2022,
        primaryRearResolution: "108 MP",
        frontCameraResolution: "40 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "512 GB",
        screenSize: "6.8 inches",
        batterySize: "5000 mAh",
        price: 129999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 45,
        totalScore: 0
    },

    // Google Pixel 7 Pro with different configurations
    {
        brand: "Google",
        model: "Pixel 7 Pro 128GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "10.8 MP",
        ram: "12 GB",
        chipset: "Google Tensor G2",
        storage: "128 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 84999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 45,
        totalScore: 0
    },
    {
        brand: "Google",
        model: "Pixel 7 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "10.8 MP",
        ram: "12 GB",
        chipset: "Google Tensor G2",
        storage: "256 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 94999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 60,
        totalScore: 0
    },
    {
        brand: "Google",
        model: "Pixel 7 Pro 512GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "10.8 MP",
        ram: "12 GB",
        chipset: "Google Tensor G2",
        storage: "512 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 104999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 60,
        totalScore: 0
    },

    // OnePlus 10 Pro with different configurations
    {
        brand: "OnePlus",
        model: "OnePlus 10 Pro 128GB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "32 MP",
        ram: "8 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "128 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 66999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "OnePlus",
        model: "OnePlus 10 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "48 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "256 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 71999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

    // Xiaomi 12 Pro with different configurations
    {
        brand: "Xiaomi",
        model: "Xiaomi 12 Pro 128GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "8 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "128 GB",
        screenSize: "6.73 inches",
        batterySize: "4600 mAh",
        price: 62999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Xiaomi",
        model: "Xiaomi 12 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "256 GB",
        screenSize: "6.73 inches",
        batterySize: "4600 mAh",
        price: 69999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

    // Oppo Find X5 Pro with different configurations
    {
        brand: "Oppo",
        model: "Oppo Find X5 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "MediaTek Dimensity 9000",
        storage: "256 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 84999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Oppo",
        model: "Oppo Find X5 Pro 512GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "MediaTek Dimensity 9000",
        storage: "512 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 94999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

    // Realme GT 2 Pro with different configurations
    {
        brand: "Realme",
        model: "Realme GT 2 Pro 128GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "8 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "128 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 49999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Realme",
        model: "Realme GT 2 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "256 GB",
        screenSize: "6.7 inches",
        batterySize: "5000 mAh",
        price: 54999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

    // Vivo X80 Pro with different configurations
    {
        brand: "Vivo",
        model: "Vivo X80 Pro 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "256 GB",
        screenSize: "6.78 inches",
        batterySize: "4700 mAh",
        price: 79999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Vivo",
        model: "Vivo X80 Pro 512GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "32 MP",
        ram: "12 GB",
        chipset: "Snapdragon 8 Gen 1",
        storage: "512 GB",
        screenSize: "6.78 inches",
        batterySize: "4700 mAh",
        price: 89999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

    // Additional phones (not all are shown here for brevity)
    {
        brand: "Samsung",
        model: "Galaxy A53 5G",
        releaseYear: 2022,
        primaryRearResolution: "64 MP",
        frontCameraResolution: "32 MP",
        ram: "6 GB",
        chipset: "Exynos 1280",
        storage: "128 GB",
        screenSize: "6.5 inches",
        batterySize: "5000 mAh",
        price: 34999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Realme",
        model: "Realme 9 Pro+ 128GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "16 MP",
        ram: "6 GB",
        chipset: "Dimensity 920",
        storage: "128 GB",
        screenSize: "6.4 inches",
        batterySize: "4500 mAh",
        price: 24999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },
    {
        brand: "Realme",
        model: "Realme 9 Pro+ 256GB",
        releaseYear: 2022,
        primaryRearResolution: "50 MP",
        frontCameraResolution: "16 MP",
        ram: "8 GB",
        chipset: "Dimensity 920",
        storage: "256 GB",
        screenSize: "6.4 inches",
        batterySize: "4500 mAh",
        price: 27999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
    },

        {
            brand: "Asus",
            model: "Asus ZenFone 9 128GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "12 MP",
            ram: "8 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "128 GB",
            screenSize: "5.9 inches",
            batterySize: "4300 mAh",
            price: 39999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Asus",
            model: "Asus ZenFone 9 256GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "12 MP",
            ram: "16 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "256 GB",
            screenSize: "5.9 inches",
            batterySize: "4300 mAh",
            price: 39999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Motorola",
            model: "Motorola Edge 30 Ultra 128GB",
            releaseYear: 2022,
            primaryRearResolution: "200 MP",
            frontCameraResolution: "60 MP",
            ram: "8 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "128 GB",
            screenSize: "6.7 inches",
            batterySize: "4610 mAh",
            price: 59999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Motorola",
            model: "Motorola Edge 30 Ultra 256GB",
            releaseYear: 2022,
            primaryRearResolution: "200 MP",
            frontCameraResolution: "60 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "256 GB",
            screenSize: "6.7 inches",
            batterySize: "4610 mAh",
            price: 64999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Honor",
            model: "Honor Magic 4 Pro 256GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "12 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "256 GB",
            screenSize: "6.81 inches",
            batterySize: "4600 mAh",
            price: 74999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Honor",
            model: "Honor Magic 4 Pro 512GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "12 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "512 GB",
            screenSize: "6.81 inches",
            batterySize: "4600 mAh",
            price: 84999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Xiaomi",
            model: "Xiaomi 13 Pro 128GB",
            releaseYear: 2023,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "32 MP",
            ram: "8 GB",
            chipset: "Snapdragon 8 Gen 2",
            storage: "128 GB",
            screenSize: "6.73 inches",
            batterySize: "4820 mAh",
            price: 74999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Xiaomi",
            model: "Xiaomi 13 Pro 256GB",
            releaseYear: 2023,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "32 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8 Gen 2",
            storage: "256 GB",
            screenSize: "6.73 inches",
            batterySize: "4820 mAh",
            price: 84999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Samsung",
            model: "Galaxy Z Flip 4 128GB",
            releaseYear: 2022,
            primaryRearResolution: "12 MP",
            frontCameraResolution: "10 MP",
            ram: "8 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "128 GB",
            screenSize: "6.7 inches",
            batterySize: "3700 mAh",
            price: 84999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Samsung",
            model: "Galaxy Z Flip 4 256GB",
            releaseYear: 2022,
            primaryRearResolution: "12 MP",
            frontCameraResolution: "10 MP",
            ram: "8 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "256 GB",
            screenSize: "6.7 inches",
            batterySize: "3700 mAh",
            price: 94999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Samsung",
            model: "Galaxy Z Fold 4 256GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "10 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "256 GB",
            screenSize: "7.6 inches",
            batterySize: "4400 mAh",
            price: 154999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Samsung",
            model: "Galaxy Z Fold 4 512GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "10 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8+ Gen 1",
            storage: "512 GB",
            screenSize: "7.6 inches",
            batterySize: "4400 mAh",
            price: 164999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Sony",
            model: "Xperia 1 IV 256GB",
            releaseYear: 2022,
            primaryRearResolution: "12 MP",
            frontCameraResolution: "12 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "256 GB",
            screenSize: "6.5 inches",
            batterySize: "5000 mAh",
            price: 129999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Sony",
            model: "Xperia 1 IV 512GB",
            releaseYear: 2022,
            primaryRearResolution: "12 MP",
            frontCameraResolution: "12 MP",
            ram: "12 GB",
            chipset: "Snapdragon 8 Gen 1",
            storage: "512 GB",
            screenSize: "6.5 inches",
            batterySize: "5000 mAh",
            price: 139999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
    
        {
            brand: "Huawei",
            model: "Huawei P50 Pro 256GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "13 MP",
            ram: "8 GB",
            chipset: "Kirin 9000",
            storage: "256 GB",
            screenSize: "6.6 inches",
            batterySize: "4360 mAh",
            price: 79999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        },
        {
            brand: "Huawei",
            model: "Huawei P50 Pro 512GB",
            releaseYear: 2022,
            primaryRearResolution: "50 MP",
            frontCameraResolution: "13 MP",
            ram: "8 GB",
            chipset: "Kirin 9000",
            storage: "512 GB",
            screenSize: "6.6 inches",
            batterySize: "4360 mAh",
            price: 89999,
        _storage: 0,
        gaming: 0,
        surfing: 0,
        photography: 0,
        totalScore: 0
        }
        // {
        //     brand: "ASUS",
        //     model: "ASUS ROG Phone 6 Pro",
        //     releaseYear: 2022,
        //     primaryRearResolution: "50 MP",
        //     frontCameraResolution: "12 MP",
        //     ram: "18 GB",
        //     chipset: "Qualcomm Snapdragon 8+ Gen 1",
        //     storage: "512 GB",
        //     screenSize: "6.78 inches",
        //     batterySize: "6000 mAh",
        //     price: "94,999 INR",
        //     _storage: 0,
        //     gaming: 50,
        //     surfing: 0,
        //     photography: 0,
        // totalScore: 0
        // },
        // {
        //     brand: "Lenovo",
        //     model: "Lenovo Legion Y90",
        //     releaseYear: 2022,
        //     primaryRearResolution: "64 MP",
        //     frontCameraResolution: "16 MP",
        //     ram: "18 GB",
        //     chipset: "Qualcomm Snapdragon 8 Gen 1",
        //     storage: "640 GB",
        //     screenSize: "6.92 inches",
        //     batterySize: "5600 mAh",
        //     price: "53,999 INR",
        //     _storage: 0,
        //     gaming: 30,
        //     surfing: 0,
        //     photography: 0,
        // totalScore: 0
        // }
    
    
];


console.log(mobilePhones);
let mobilePhones2 =  mobilePhones.map(phone => {
    const screenSize = parseFloat(phone.screenSize);
    
    if (screenSize >= 6.5 && screenSize <= 6.6) {
      phone.surfing += 85; 
    }
    else if (screenSize > 6.6 && screenSize <= 6.8) {
      phone.surfing += 95; 
    }
    else if (screenSize > 6.8) {
      phone.surfing += 100; 
    }

    const ram = parseInt(phone.ram);
    
    // RAM
    if (ram >= 6 && ram<8) {
      phone.surfing += 65;
      phone._storage += 65;

    }
      
    if (ram >= 8 && ram<12) {
        phone.surfing+=80;
        phone._storage+=80;
        phone.gaming += 90;
      }
    if (ram >= 12) {
        phone.surfing+=80;
        phone._storage+=80;
        phone.gaming += 100;
      }
      
      
    //Storage
    const storage = parseInt(phone.storage);
    if(storage>=256 && storage<512){
        phone._storage += 80;
    }
    else if(storage>=512 && storage<1024){
        phone._storage += 90;
    }
    else if(storage>=1024){
        phone._storage += 100;
    }

    //Battery Size
    const batterySize = parseInt(phone.batterySize);
    if (batterySize >= 5000) {
      phone.gaming += 50;
    }
    else if (batterySize >= 4000) {
      phone.gaming += 40;
    }
    else if (batterySize >= 3000) {
      phone.gaming += 30;
    }

    //RearCam
    const primaryRearResolution = parseFloat(phone.primaryRearResolution);
    if (primaryRearResolution >= 48) {
      phone.surfing += 25;
      phone.photography += 100;
    }

    //FrontCam
    const frontCameraResolution = parseFloat(phone.frontCameraResolution);
    if (frontCameraResolution >= 12) {
      phone.surfing += 25;
      phone.photography += 80;
    }
    return phone;
  });
  

  console.log("1111",mobilePhones2);

  let mobilePhones3 = mobilePhones2.map(phone => {
    const chipset = phone.chipset;
    if(chipset.includes("Snapdragon 8 Gen 1")){
        phone.gaming +=60;
        phone._storage +=70;
        phone.photography += 40;
    }
    else if(chipset.includes("Snapdragon 8+ Gen 1")){
        phone.gaming += 70;
        phone._storage += 75;
        phone.photography += 45;
    }
    else if(chipset.includes("Snapdragon 8 Gen 2")){
        phone.gaming += 80;
        phone._storage += 80;
        phone.photography += 50;
    }
    else if(chipset.includes("MediaTek Dimensity 9000")){
        phone.gaming += 70;
        phone._storage += 75;
        phone.photography += 40;
    }
    else if(chipset.includes("A16 Bionic")){
        phone.gaming += 65;
        phone._storage += 80;
        phone.photography += 50;
    }
    else if(chipset.includes("Tensor 2")){
        phone.gaming += 75;
        phone._storage +=80;
        phone.photography += 50;
    }
    else if(chipset.includes("Kirin")){
        phone.gaming += 60;
        phone._storage +=70;
    }

    return phone;
});


console.log("11",mobilePhones3);
let mobilePhones4 = mobilePhones3.map(phone => {
    if (pStorage ==1) {
        phone.totalScore += phone._storage * 2;
    }
    else if(pStorage==2){
        phone.totalScore += phone._storage * 1.5;
    }
    else if(pStorage==3){
        phone.totalScore += phone._storage * 0.75;
    }
    else if(pStorage==4){
        phone.totalScore += phone._storage * 0.25;
    }

    if (pSurfing ==1) {
        phone.totalScore += phone.surfing * 2;
    }
    else if(pSurfing==2){
        phone.totalScore += phone.surfing * 1.5;
    }
    else if(pSurfing==3){
        phone.totalScore += phone.surfing * 0.75;
    }
    else if(pSurfing==4){
        phone.totalScore += phone.surfing * 0.25;
    }


    if (pGaming ==1) {
        phone.totalScore += phone.gaming * 2;
    }
    else if(pGaming==2){
        phone.totalScore += phone.gaming * 1.5;
    }
    else if(pGaming==3){
        phone.totalScore += phone.gaming * 0.75;
    }
    else if(pGaming==4){
        phone.totalScore += phone.gaming * 0.25;
    }

    if (pPhoto ==1) {
        phone.totalScore += phone.photography * 2;
    }
    else if(pPhoto==2){
        phone.totalScore += phone.photography * 1.5;
    }
    else if(pPhoto==3){
        phone.totalScore += phone.photography * 0.75;
    }
    else if(pPhoto==4){
        phone.totalScore += phone.photography * 0.25;
    }

    return phone;
  });




 let mobilePhones5 = mobilePhones4.map(phone => {
    const price = phone.price;
    if (price < minBudge||price>maxBudge) {
        phone.totalScore = 0;
    }
    return phone;  
});
  
console.log('Updated mobilePhones:',mobilePhones5);
  // Sort mobilePhones array based on totalScore in descending order
mobilePhones5.sort((a, b) => b.totalScore - a.totalScore);

// Now mobilePhones is sorted, with highest totalScore first


// If you want to display the top 3 phones:
const topThreePhones = mobilePhones5.slice(0, 3);
console.log('Sorted mobilePhones:', mobilePhones5);
// Display the top 3 phones
const phoneResults = document.getElementById('phone-results');
phoneResults.innerHTML = `
    <div class="result-summary">
        <h3>Top 3 Recommended Phones:</h3>
    </div>
    <div class="phone-recommendations">
        ${topThreePhones.map(formatPhone).join('')}
    </div>
`;
mobilePhones.forEach(phone => {
    phone.totalScore = 0;
});
mobilePhones1.forEach(phone => {
    phone.totalScore = 0;
});
mobilePhones2.forEach(phone => {
    phone.totalScore = 0;
});
mobilePhones3.forEach(phone => {
    phone.totalScore = 0;
});
mobilePhones4.forEach(phone => {
    phone.totalScore = 0;
});

mobilePhones5.forEach(phone => {
    phone.totalScore = 0;
});
});
