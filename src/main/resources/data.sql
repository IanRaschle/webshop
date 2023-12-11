CREATE TABLE Product (
    id int PRIMARY KEY,
    title varchar(50),
    description varchar(3000),
    category varchar(20),
    price int,
    remaining int,
    rating double,
    url varchar(600)
);


INSERT INTO Product (id, title, description, category, price, remaining, rating, url)
VALUES
(1,
 'Gigabyte GeForce RTX 4070 WINDFORCE OC 12G',
 'Die GIGABYTE GeForce RTX 4070 WINDFORCE OC 12G ist mit einem leistungsstarken Grafikprozessor und besonders schnellem GDDR6X-Grafikspeicher ausgestattet. Die Gaming-Grafikkarte eignet sich für Spieler mit hohen Ansprüchen an Grafikqualität und Frameraten. Im Vergleich zur RTX-30-Serie wurden die Rechengeschwindigkeit der Rasterization-Optik und die Raytracing-Performance deutlich gesteigert. Darüber hinaus unterstützen die Grafikbeschleuniger der Ada-Lovelace-Generation PCI-Express 4.0. Die GeForce RTX 4070 sorgt für flüssiges Gameplay in WQHD- und 4K-Auflösung mit hohen Grafik-Presets.',
 'PC-Komponente',
 573,
 12,
 4,
 'https://www.digitec.ch/im/productimages/1/6/4/8/3/5/8/3/4/3/3/6/4/5/4/0/6/2/7e4d9adb-8856-4059-a5c9-aaf349b0d1c4_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1296&resizeHeight=972&cropWidth=1296&cropHeight=972&resizeType=downsize&quality=high'),
 (2,
 'Intel Core i9-13900K',
 'Die Intel Core Desktop-Prozessoren der 13ten Generation namens Raptor Lake bringen ein Chiplayout mit verschiedenen CPU-Kernen für verschiedene Anwendungsszenarien. Die Performance Cores sorgen für Leistung bei rechenintensiven Anwendungen, die Efficiency Cores für Energieeffizienz bei wenig Last. Die Raptor Lake Prozessoren unterstützen PCIe Gen 5.0- und 4.0-, DDR5- und DDR4. Der Prozessor ist kompatibel mit Motherboards basierend auf dem Intel 700er und 600er Chipsatz.',
 'PC-Komponente',
 563,
 5,
 4.5,
 'https://www.digitec.ch/im/productimages/5/6/2/9/4/6/4/0/6/1/3/8/5/2/3/0/1/0/7/0d64d918-daeb-48bb-9462-8331b78c0349_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1296&resizeHeight=972&cropWidth=1296&cropHeight=972&resizeType=downsize&quality=high'),
(3,
'Corsair Vengeance RGB',
'Der Corsair Vengeance RGB DDR5-Speicher bietet DDR5-Leistung, höhere Frequenzen und grössere Kapazitäten, die für Intel-Motherboards optimiert sind, und bringt Ihren PC mit dynamischer, individuell adressierbarer Zehn-Zonen-RGB-Beleuchtung zum Leuchten.',
'PC-Komponente',
129,
10,
4.5,
'https://www.digitec.ch/im/productimages/8/0/7/0/7/7/9/0/3/7/2/9/0/1/7/2/3/1/2/a535e5de-bbba-4e3e-aaf6-b8df052b9656_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1296&resizeHeight=972&cropWidth=1296&cropHeight=972&resizeType=downsize&quality=high'),
(4,
'be quiet! Straight Power',
'Das be quiet. Straight Power 11 850W setzt neue Massstäbe für flüsterleise Systeme, ohne auch nur geringste Kompromisse bei der Stromversorgung einzugehen.Der hochwertige Silent Wings 3 Lüfter ist beeindruckend leise und erzielt einen erstklassigen Luftstrom. Er ist mit vielen hochwertigen Features ausgestattet, wie einem strömungsoptimierten Design der Lüfterblätter, einem fortschrittlichen Fluid-Dynamic-Lager und einem 6-Pol Motor, die für minimale Vibrationen, Langlebigkeit und geringen Stromverbrauch sorgen.Das trichterförmige Design des Lüftereinlasses im Netzteilgehäuse sorgt für einen erhöhten Luftdurchsatz, was ultimativ zu einer Verbesserung der Kühlleistung führt.Eine absolute Innovation: Das Straight Power 11 850W ist im Inneren des Netzteils auf der DC-Seite kabellos. Dies verbessert die Luftzirkulation, reduziert Signalstörungen durch die entfallene Verkabelung und erhöht so die Langlebigkeit der Komponenten auf ein Maximum.Nur die Kabel, die wirklich benötigt werden, kommen zum Einsatz. Der Vorteil: Ein aufgeräumtes Gehäuse, eine einfache Installation sowie ein ungestörter Luftstrom, der zu geringeren Systemtemperaturen und einem insgesamt leiseren Betrieb führt.Das Straight Power 11 850W ist 80 PLUS Gold zertifiziert und erreicht eine Effizienz von bis zu 93%. Ein wirklicher Vorteil für jedes System, denn so wird der Energieverbrauch verringert, das System besser gekühlt und ein leiserer Betrieb erzielt.Durch den Einsatz der LLC- und SR-Technologie wird die Effizienz und Leitungsstabilität erhöht. Der DC/DC-Wandler sorgt für eine noch stärkere Spannungsregulierung - sogar bei heftigen Cross-Loads. Dies gewährleistet einen zuverlässigen Betrieb, auch mit der nächsten Generation von Prozessoren und Grafikkarten.Nur die besten Komponenten kommen im Straight Power 11 850W zum Einsatz. Deshalb werden ausschliesslich hochwertige japanische Kondensatoren verbaut. Sie sind auf eine Betriebstemperatur bis 105°C ausgelegt und gewährleisten Zuverlässigkeit sowie eine lange Lebensdauer.',
'PC-Komponente',
145,
6,
5,
'https://www.digitec.ch/im/productimages/5/7/5/0/7/2/4/2/7/2/9/7/4/1/0/4/1/0/8/86009707-4f0c-4a4d-ba21-851284ca6cf7.jpg?impolicy=ProductTileImage&resizeWidth=1296&resizeHeight=972&cropWidth=1296&cropHeight=972&resizeType=downsize&quality=high'),
(5,
'ASUS ROG Strix B550-F Gaming Wifi II',
'Das ASUS ROG Strix B550-F Gaming WIFI II basiert auf dem AMD-B550-Chipsatz und unterstützt AMD-Prozessoren für den Sockel AM4. Es verfügt über vier DDR4-Slots für bis zu 128 GB Arbeitsspeicher. Zur weiteren Ausstattung des ASUS ROG Strix B550-F Gaming gehören ein PCIe-4.0-x16-Slot, ein PCIe 3.0 x16 und drei PCIe 3.0 x1 Slots. Ausserdem verfügt das ASUS ROG Strix B550-F Gaming WIFI II über 8-Kanal-Sound, eine 2,5-Gigabit-LAN-Schnittstelle, Wi-Fi 6, sechs SATA3-Anschlüsse, zwei M.2-Anschlüsse und eine Reihe an USB Schnittstellen.',
'PC-Komponente',
152,
21,
4.5,
'' ||
'https://www.digitec.ch/im/productimages/7/7/8/8/4/0/1/6/7/3/1/5/9/8/3/6/8/1/4/06ad4125-5476-401c-b5ff-9a480e31dcee.jpg?impolicy=ProductTileImage&resizeWidth=1296&resizeHeight=972&cropWidth=1296&cropHeight=972&resizeType=downsize&quality=high'),
(6,
'Minecraft',
'Minecraft ist ein Open-World-Spiel. Das Hauptaugenmerk liegt auf der Erkundung und Entdeckung der Welt sowie dem Bau eigener Gebäude und Vorrichtungen. Der Spieler kann Rohstoffe abbauen („Mine“), diese zu anderen Gegenständen weiterverarbeiten („Craft“) und gegen Monster kämpfen.',
'PC-Spiel',
35,
1000,
4.5,
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.minecraft.net%2Fcontent%2Fdam%2Fgames%2Fminecraft%2Fkey-art%2FSUPM_Game-Image_One-Vanilla_672x400.jpg&tbnid=7SCzgY3agQlTcM&vet=12ahUKEwiyx-zazOOCAxU0ygIHHScSCvcQMygCegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.minecraft.net%2Fde-de&docid=X_2cD9fl7yX6MM&w=672&h=400&itg=1&q=minecraft&ved=2ahUKEwiyx-zazOOCAxU0ygIHHScSCvcQMygCegQIARB1'),
(7,
'Valorant',
'Valorant von Riot Games ist ein Team-basierter Taktik-Shooter aus der First-Person Perspektive, der in der nahen Zukunft spielt. Als Spieler übernimmt man die Kontrolle eines der unterschiedlichen Agenten-Charaktere, die aus verschiedenen Ländern und Kulturen kommen.',
'PC-Spiel',
0,
1000,
4.5,
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.redbull.com%2Fimages%2Fc_limit%2Cw_1500%2Ch_1000%2Cf_auto%2Cq_auto%2Fredbullcom%2F2020%2F6%2F19%2Fukb5r373iqqxtyjtznsc%2Fvalorant-artwork&tbnid=iRvz5MVW4cRfbM&vet=12ahUKEwiWvaCtzeOCAxU33wIHHYwADSAQMygJegUIARCBAQ..i&imgrefurl=https%3A%2F%2Fwww.redbull.com%2Fch-de%2Fvalorant-agent-tier-list&docid=KNngz0fLU1zdgM&w=1500&h=844&q=valorant&ved=2ahUKEwiWvaCtzeOCAxU33wIHHYwADSAQMygJegUIARCBAQ');
