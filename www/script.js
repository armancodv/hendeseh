var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.shape = [];
	$scope.shape[0] = 'barrel';
	$scope.shape[1] = 'cone';
	$scope.shape[2] = 'frustum_cone';
	$scope.shape[3] = 'cube';
	$scope.shape[4] = 'cylinder';
	$scope.shape[5] = 'hollow_cylinder';
	$scope.shape[6] = 'sectioned_cylinder';
	$scope.shape[7] = 'parallelepiped';
	$scope.shape[8] = 'hexagonal_prism';
	$scope.shape[9] = 'pyramid';
	$scope.shape[10] = 'frustum_pyramid';
	$scope.shape[11] = 'sphere';
	$scope.shape[12] = 'spherical_cap';
	$scope.shape[13] = 'spherical_sector';
	$scope.shape[14] = 'spherical_zone';
	$scope.shape[15] = 'torus';

	$scope.name = [];
	$scope.name[0] = 'بشکه';
	$scope.name[1] = 'مخروط';
	$scope.name[2] = 'برش مخروط';
	$scope.name[3] = 'مکعب';
	$scope.name[4] = 'استوانه';
	$scope.name[5] = 'استوانه تو خالی';
	$scope.name[6] = 'برش استوانه';
	$scope.name[7] = 'مکعب مسطتیل';
	$scope.name[8] = 'منشور شش پهلو';
	$scope.name[9] = 'هرم';
	$scope.name[10] = 'برش هرم';
	$scope.name[11] = 'کره';
	$scope.name[12] = 'برش کناره کره';
	$scope.name[13] = 'برش زاویه ای کره';
	$scope.name[14] = 'برش مقطع کره';
	$scope.name[15] = 'حلقه';

	$scope.input = [];
	$scope.input[0] = ['d1','d','l'];
	$scope.input[1] = ['h','r'];
	$scope.input[2] = ['h','r1','r'];
	$scope.input[3] = ['a'];
	$scope.input[4] = ['h','r'];
	$scope.input[5] = ['h','r1','r2'];
	$scope.input[6] = ['r','h1','h2'];
	$scope.input[7] = ['a','b','c'];
	$scope.input[8] = ['h','a'];
	$scope.input[9] = ['h','b','p','s'];
	$scope.input[10] = ['h','s1','s'];
	$scope.input[11] = ['r'];
	$scope.input[12] = ['h','r'];
	$scope.input[13] = ['h','r'];
	$scope.input[14] = ['a','b','h'];
	$scope.input[15] = ['r1','r'];

	$scope.input_fa = [];
	$scope.input_fa[0] = ['قطر بزرگ (D)','قطر کوچک (d)','ارتفاع (L)'];
	$scope.input_fa[1] = ['ارتفاع (h)','شعاع (r)'];
	$scope.input_fa[2] = ['ارتفاع (h)','شعاع برزگ (R)','شعاع کوچک (r)'];
	$scope.input_fa[3] = ['ضلع (a)'];
	$scope.input_fa[4] = ['ارتفاع (h)','شعاع (r)'];
	$scope.input_fa[5] = ['ارتفاع (h)','شعاع برزگ (r1)','شعاع کوچک (r2)'];
	$scope.input_fa[6] = ['شعاع (r)','ارتفاع کوچک(h1)','ارتفاع بزرگ(h2)'];
	$scope.input_fa[7] = ['ضلع (a)','ضلع (b)','ضلع (c)'];
	$scope.input_fa[8] = ['ارتفاع (h)','ضلع (a)'];
	$scope.input_fa[9] = ['ارتفاع (h)','مساحت سطح پایین (B)','محیط سطح پایین (P)','طول ضلع هرم (s)'];
	$scope.input_fa[10] = ['ارتفاع (h)','مساحت بزرگ (S)','مساحت کوچک (s)'];
	$scope.input_fa[11] = ['شعاع (R)'];
	$scope.input_fa[12] = ['ارتفاع (h)','شعاع (r)'];
	$scope.input_fa[13] = ['ارتفاع (h)','شعاع (r)'];
	$scope.input_fa[14] = ['شعاع برزگ (a)','شعاع کوچک (b)','ارتفاع (h)'];
	$scope.input_fa[15] = ['شعاع حلقه (R)','شعاع مقطع (r)'];


	$scope.output = [];
	$scope.output[0] = ['vol'];
	$scope.output[1] = ['vol','ara','cgr','slh'];
	$scope.output[2] = ['vol','ara','cgr','slh','tar'];
	$scope.output[3] = ['vol','ara','dga'];
	$scope.output[4] = ['vol','ara'];
	$scope.output[5] = ['vol'];
	$scope.output[6] = ['vol','ara'];
	$scope.output[7] = ['vol','ara','dga'];
	$scope.output[8] = ['vol','ara'];
	$scope.output[9] = ['vol','ara','cgr'];
	$scope.output[10] = ['vol','cgr'];
	$scope.output[11] = ['vol','ara'];
	$scope.output[12] = ['vol','ara','cgr','dsc','tar'];
	$scope.output[13] = ['vol','ara','cgr','dsc'];
	$scope.output[14] = ['vol','rsf'];
	$scope.output[15] = ['vol','ara'];

	$scope.output_fa = [];
	$scope.output_fa['vol'] = 'حجم';
	$scope.output_fa['ara'] = 'مساحت سطح';
	$scope.output_fa['tar'] = 'مساحت سطح کل';
	$scope.output_fa['dga'] = 'قطر';
	$scope.output_fa['cgr'] = 'مرکز جرم';
	$scope.output_fa['slh'] = 'طول شیب';
	$scope.output_fa['dsc'] = 'قطر مقطع';
	$scope.output_fa['rsf'] = 'شعاع کره';
	$scope.output_fa['hss'] = 'ارتفاع برش کره';

	$scope.output_en = [];
	$scope.output_en['vol'] = 'Volume (V)';
	$scope.output_en['ara'] = 'Surface Area (A)';
	$scope.output_en['tar'] = 'Total surface Area (AT)';
	$scope.output_en['dga'] = 'Diagonal (D)';
	$scope.output_en['cgr'] = 'Center of Gravity (G)';
	$scope.output_en['slh'] = 'Slant height (s)';
	$scope.output_en['dsc'] = 'Diameter of Spherical Cap /Sector (c)';
	$scope.output_en['rsf'] = 'Radius of the Sphere (r)';
	$scope.output_en['hss'] = 'Height of Spherical Segment (h)';

	$scope.value = [];

	$scope.select = function(number) {
		$scope.shape_id=number;
		$scope.value = [];
		$scope.value['d1']=0;
		$scope.value['d']=0;
		$scope.value['l']=0;
		$scope.value['h']=0;
		$scope.value['r']=0;
		$scope.value['r1']=0;
		$scope.value['a']=0;
		$scope.value['b']=0;
		$scope.value['c']=0;
		$scope.value['r2']=0;
		$scope.value['h1']=0;
		$scope.value['h2']=0;
		$scope.value['p']=0;
		$scope.value['s']=0;
		$scope.value['s1']=0;
		$scope.value['c']=0;
		$scope.result = [];
	}
	
	$scope.calculate = function() {
		$scope.result = [];
		if($scope.shape_id==0) {
			$scope.result['vol'] = Math.PI * $scope.value['l'] * (2 * $scope.value['d1'] * $scope.value['d1'] + $scope.value['d1'] * $scope.value['d'] + 0.75 * $scope.value['d'] * $scope.value['d']) /15;
		} else if($scope.shape_id==1) {
			$scope.result['vol'] = Math.PI * $scope.value['r'] * $scope.value['r'] * $scope.value['h'] /3;         // volume
			$scope.result['ara'] = Math.PI * $scope.value['r'] * Math.sqrt(($scope.value['r'] * $scope.value['r']) + ($scope.value['h'] * $scope.value['h']));  // Surface-Area
			$scope.result['cgr'] = $scope.value['h'] /4;    // Center of Gravity
			$scope.result['slh'] = Math.sqrt(($scope.value['r'] * $scope.value['r']) + ($scope.value['h'] * $scope.value['h']));    // Slant height
		} else if($scope.shape_id==2) {
			$scope.result['vol'] = (Math.PI * $scope.value['h'] * ($scope.value['r1'] * $scope.value['r1'] + $scope.value['r'] * $scope.value['r'] + $scope.value['r1'] * $scope.value['r'])) /3;         // volume
			$scope.result['slh'] = Math.sqrt($scope.value['h'] * $scope.value['h'] + Math.pow(($scope.value['r1'] - $scope.value['r']), 2));    // Slant height
			$scope.result['ara'] = Math.PI * ($scope.value['r1'] + $scope.value['r']) * $scope.result['slh'];  // Lateral-Surface-Area
			$scope.result['tar'] = Math.PI * $scope.value['r1'] * $scope.value['r1'] + Math.PI * $scope.value['r'] * $scope.value['r'] + $scope.result['ara'];   // Total surface Area
			$scope.result['cgr'] = 0.25 * $scope.value['h'] * ($scope.value['r1'] * $scope.value['r1'] + 3 * $scope.value['r'] * $scope.value['r'] + 2 * $scope.value['r1'] * $scope.value['r']) / ($scope.value['r1'] * $scope.value['r1'] + $scope.value['r'] * $scope.value['r'] + $scope.value['r1'] * $scope.value['r']);    // Center of Gravity
		} else if($scope.shape_id==3) {
			$scope.result['vol'] = Math.pow($scope.value['a'], 3);                // volume
			$scope.result['ara'] = 6 * Math.pow($scope.value['a'], 2);            // Surface-Area
			$scope.result['dga'] = $scope.value['a'] * Math.sqrt(3);              // diagonal
		} else if($scope.shape_id==4) {
			$scope.result['vol'] = Math.PI * $scope.value['r'] * $scope.value['r'] * $scope.value['h'];                // volume
			$scope.result['ara'] = (2 * $scope.value['r'] + 2 * $scope.value['h']) * Math.PI * $scope.value['r'];            // Surface-Area
		} else if($scope.shape_id==5) {
			$scope.result['vol'] = Math.PI * $scope.value['h'] * ($scope.value['r1'] * $scope.value['r1'] - $scope.value['r2'] * $scope.value['r2']);    // volume
		} else if($scope.shape_id==6) {
			$scope.result['vol'] = Math.PI * $scope.value['r'] * $scope.value['r'] * (0.5 * $scope.value['h1'] + 0.5 * $scope.value['h2']);                // volume
			$scope.result['ara'] = Math.PI * ($scope.value['h1'] + $scope.value['h2']);            // Surface-Area
		} else if($scope.shape_id==7) {
			$scope.result['vol'] = $scope.value['a'] * $scope.value['b'] * $scope.value['c'];                // volume
			$scope.result['ara'] = 2 * ($scope.value['a'] * $scope.value['b'] + $scope.value['a'] * $scope.value['c'] + $scope.value['b'] * $scope.value['c']);   // Surface-Area
			$scope.result['dga'] = Math.sqrt($scope.value['a'] * $scope.value['a'] + $scope.value['b'] * $scope.value['b'] + $scope.value['c'] * $scope.value['c']);     // diagonal
		} else if($scope.shape_id==8) {
			$scope.result['vol'] = 1.5 * $scope.value['a'] * $scope.value['a'] * $scope.value['h'] * Math.sqrt(3);                // volume
			$scope.result['ara'] = 3 * $scope.value['a'] * ($scope.value['a'] * Math.sqrt(3) + 2 * $scope.value['h']);            // Surface-Area
		} else if($scope.shape_id==9) {
			$scope.result['vol'] = $scope.value['h'] * $scope.value['b'] /3;         // volume
			if($scope.value['p'] != '' && $scope.value['s'] != '') $scope.result['ara'] = 0.5 * $scope.value['p'] * $scope.value['s'];  // Lateral-Surface-Area
			$scope.result['cgr'] = $scope.value['h'] /4;    // Center of Gravity
		} else if($scope.shape_id==10) {
			$scope.result['vol'] = $scope.value['h'] * ($scope.value['s1']*1 + $scope.value['s']*1 + Math.sqrt($scope.value['s1'] * $scope.value['s'])) /3;   // volume
			$scope.result['cgr'] = 0.25 * $scope.value['h'] * ($scope.value['s1']*1 + 3 * $scope.value['s'] + 2 * Math.sqrt($scope.value['s1'] * $scope.value['s'])) / ($scope.value['s1']*1 + $scope.value['s']*1 + Math.sqrt($scope.value['s1'] * $scope.value['s']));    // Center of Gravity
		} else if($scope.shape_id==11) {
			$scope.result['vol'] = 4 * Math.PI * Math.pow($scope.value['r'], 3) /3;         // volume
			$scope.result['ara'] = 4 * Math.PI * Math.pow($scope.value['r'], 2);      // Surface-Area
		} else if($scope.shape_id==12) {
			$scope.result['vol'] = Math.PI * $scope.value['h'] * $scope.value['h'] * ($scope.value['r'] - $scope.value['h'] /3);                // volume
			$scope.result['ara'] = Math.PI * $scope.value['r'] * $scope.value['h'] * 2;            // Lateral-Surface-Area
			$scope.result['dsc'] = 2 * Math.sqrt($scope.value['h'] * (2 * $scope.value['r'] - $scope.value['h']));     // Radius of Spherical Cap
			$scope.result['tar'] = Math.PI * ($scope.value['c'] * $scope.value['c'] + 2 * $scope.value['h'] * $scope.value['h']) /2;    // Total-area
			$scope.result['cgr'] = Math.pow((2 * $scope.value['r'] - $scope.value['h']), 2) / (3 * $scope.value['r'] - $scope.value['h']) * 3/4;   // Center of Gravity
		} else if($scope.shape_id==13) {
			$scope.result['dsc'] = 2 * Math.sqrt($scope.value['h'] * (2 * $scope.value['r'] - $scope.value['h']));     // Radius of Spherical Cap
			$scope.result['vol'] = Math.PI * $scope.value['r'] * $scope.value['r'] * $scope.value['h'] * 2/3;     // volume
			$scope.result['ara'] = Math.PI * $scope.value['r'] * (2 * $scope.value['h'] + $scope.value['c'] /2);    // Surface-area
			$scope.result['cgr'] = ($scope.value['r'] - $scope.value['h']) * 3/4;   // Center of Gravity
		} else if($scope.shape_id==14) {
			$scope.result['rsf'] = Math.sqrt($scope.value['a'] * $scope.value['a'] + Math.pow((($scope.value['a'] * $scope.value['a'] - $scope.value['b'] * $scope.value['b'] - $scope.value['h'] * $scope.value['h']) / (2 * $scope.value['h'])), 2));
			$scope.result['vol'] = Math.PI * $scope.value['h'] * (3 * $scope.value['a'] * $scope.value['a'] + 3 * $scope.value['b'] * $scope.value['b'] + $scope.value['h'] * $scope.value['h']) /6;       // volume
		} else if($scope.shape_id==15) {
			$scope.result['vol'] = 2 * Math.PI * Math.PI * $scope.value['r'] * $scope.value['r'] * $scope.value['r1'];     // volume
			$scope.result['ara'] = 4 * Math.PI * Math.PI * $scope.value['r1'] * $scope.value['r'];    // Surface-Area
		}
	}
 
});

function gotopage(page_number) {
	for(i=1;i<=2;i++) {
		if(i===page_number) {
			document.getElementById('page'+i).style.display='block';
		} else {
			document.getElementById('page'+i).style.display='none';
		}
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}