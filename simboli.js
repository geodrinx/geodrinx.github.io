		var LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: './images/leaf-shadow.png',
				iconSize:     [38, 95],
				shadowSize:   [50, 64],
				iconAnchor:   [22, 94],
				shadowAnchor: [4, 62],
				popupAnchor:  [-3, -76]
			}
		});

		var greenIcon = new LeafIcon({iconUrl: './images/leaf-green.png'}),
			redIcon = new LeafIcon({iconUrl: './images/leaf-red.png'}),
			orangeIcon = new LeafIcon({iconUrl: './images/leaf-orange.png'});

		L.marker([ 41.207819, 13.586115], {icon: greenIcon}).bindPopup('<html>Immagine<img alt="" src="./images/Immaginazione.png" /></html>').addTo(map);
		L.marker([ 41.216244, 13.559694], {icon: redIcon}).bindPopup('I am a red leaf.').addTo(map);
		L.marker([ 41.211343, 13.566538], {icon: orangeIcon}).bindPopup('<html>QRCODE<img alt="" src="http://qrcode.kaywa.com/img.php?s=8&amp;d=41.211343, 13.566538" /></html>').addTo(map);
