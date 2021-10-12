var map = L.map('map').setView([10.4869, -66.5287], 14); // Comuna Ecosocialista Valle Arriba 

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Long Art Digital'
}).addTo(map);

  

//-------------SELECCIONAR CONJUNTO COMUNAL-----------------------------------------

document.getElementById('select-location').addEventListener('change', function(e) {
  console.log(e.target.value)
  let coords = e.target.value.split(",");
  map.flyTo(coords, 18);


})
//------------------------------------------------------



 



/// ---- Polígono  ----

var geojsonFeaturePolygon = [
  {"type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [[[-66.522846400,  10.476465600],
          [-66.522475500,  10.477186200],
          [-66.523297800,  10.477924700],
          [-66.523690600,  10.478277400],
          [-66.525327300,  10.478917200],
          [-66.526372200,  10.479325700],
          [-66.526590400,  10.479411000],
          [-66.527212700,  10.479665700],
          [-66.527568000,  10.479811100],
          [-66.528325400,  10.480059900],
          [-66.528961600,  10.480214700],
          [-66.529139900,  10.480104600],
          [-66.529341300,  10.480056200],
          [-66.530019000,  10.479962100],
          [-66.530016200,  10.479975400],
          [-66.529994700,  10.480077900],
          [-66.529987200,  10.480128900],
          [-66.529979700,  10.480180000],
          [-66.529975100,  10.480211800],
          [-66.529958600,  10.480244000],
          [-66.529574900,  10.480994500],
          [-66.529482200,  10.481175800],
          [-66.529168300,  10.481789700],
          [-66.528925300,  10.481822000],
          [-66.528773600,  10.481842200],
          [-66.528508400,  10.481960900],
          [-66.528255100,  10.482176600],
          [-66.528065700,  10.482473600],
          [-66.527958700,  10.482641400],
          [-66.527938700,  10.482672700],
          [-66.527918700,  10.482706400],
          [-66.527778900,  10.482941700],
          [-66.527683700,  10.483102000],
          [-66.527678100,  10.483111400],
          [-66.527573200,  10.483396100],
          [-66.527383400,  10.483324100],
          [-66.527311200,  10.483649200],
          [-66.527309000,  10.483659000],
          [-66.527296800,  10.483683800],
          [-66.527112900,  10.484058100],
          [-66.526855000,  10.484693200],
          [-66.526522000,  10.485403100],
          [-66.525905200,  10.485126900],
          [-66.525774100,  10.485717600],
          [-66.523050400,  10.485107700],
          [-66.518963800,  10.484758100],
          [-66.518555600,  10.485036800],
          [-66.516900600,  10.485256800],
          [-66.516128300,  10.485638300],
          [-66.516070600,  10.485666800],
          [-66.515820700,  10.485907700],
          [-66.515793600,  10.485933800],
          [-66.515873600,  10.486770800],
          [-66.516264600,  10.487401800],
          [-66.516394400,  10.488074600],
          [-66.516568900,  10.488578500],
          [-66.517237700,  10.487502800],
          [-66.517644400,  10.487199800],
          [-66.518383900,  10.487175600],
          [-66.518593400,  10.487405900],
          [-66.518987800,  10.487418000],
          [-66.519431000,  10.487874800],
          [-66.519771500,  10.488102700],
          [-66.520306500,  10.488254100],
          [-66.520905100,  10.488070000],
          [-66.521174400,  10.488075000],
          [-66.521637500,  10.487877100],
          [-66.522031800,  10.487817900],
          [-66.522290600,  10.487975400],
          [-66.522658500,  10.488057700],
          [-66.523141000,  10.488108700],
          [-66.523695600,  10.488060200],
          [-66.524489700,  10.487688000],
          [-66.524903400,  10.487648200],
          [-66.525201600,  10.487798400],
          [-66.525458000,  10.488072400],
          [-66.525960200,  10.487930800],
          [-66.526252700,  10.488140300],
          [-66.526375500,  10.488338400],
          [-66.526445800,  10.488451700],
          [-66.526676900,  10.488824500],
          [-66.526591700,  10.489096600],
          [-66.526272400,  10.489268300],
          [-66.526276600,  10.489427300],
          [-66.526585200,  10.489957500],
          [-66.526715200,  10.490180900],
          [-66.526966400,  10.490139100],
          [-66.527322100,  10.490567900],
          [-66.527510400,  10.490794900],
          [-66.527753400,  10.491087900],
          [-66.527865300,  10.491222700],
          [-66.527984700,  10.491765100],
          [-66.528244200,  10.492943900],
          [-66.528134500,  10.493469800],
          [-66.527646100,  10.493797300],
          [-66.527629600,  10.493808400],
          [-66.527057200,  10.494192300],
          [-66.526656400,  10.494194700],
          [-66.526221100,  10.494273000],
          [-66.525855100,  10.494350700],
          [-66.525617800,  10.494397400],
          [-66.525535800,  10.494442800],
          [-66.525271800,  10.495066600],
          [-66.523798500,  10.494862200],
          [-66.522799900,  10.494723700],
          [-66.520041600,  10.494432800],
          [-66.520072300,  10.496122500],
          [-66.520088600,  10.496851800],
          [-66.518278400,  10.497638600],
          [-66.517296600,  10.498504800],
          [-66.516838600,  10.499338800],
          [-66.515957600,  10.499798800],
          [-66.515159600,  10.499547100],
          [-66.514307600,  10.499396800],
          [-66.512775600,  10.500143800],
          [-66.512928600,  10.500982800],
          [-66.513675600,  10.501610800],
          [-66.513804600,  10.502746800],
          [-66.513642200,  10.503436400],
          [-66.513233600,  10.504333800],
          [-66.513433600,  10.505362800],
          [-66.514227600,  10.504410600],
          [-66.514909600,  10.502871800],
          [-66.515224600,  10.502473200],
          [-66.516445800,  10.502027300],
          [-66.517632600,  10.501856800],
          [-66.517587600,  10.502700800],
          [-66.517305600,  10.504636800],
          [-66.517372500,  10.505378100],
          [-66.517333600,  10.506040800],
          [-66.517119600,  10.506483800],
          [-66.517196600,  10.506876800],
          [-66.517433600,  10.506999800],
          [-66.517552600,  10.507181800],
          [-66.518009600,  10.507256800],
          [-66.518055600,  10.507720800],
          [-66.518147600,  10.507949800],
          [-66.518295600,  10.508632800],
          [-66.518366600,  10.508713800],
          [-66.518475900,  10.508638800],
          [-66.518586600,  10.508562800],
          [-66.518506600,  10.508422800],
          [-66.518796200,  10.507341600],
          [-66.518861600,  10.506889800],
          [-66.519410600,  10.506056800],
          [-66.519750600,  10.505222800],
          [-66.519684600,  10.504756800],
          [-66.519709600,  10.504384800],
          [-66.520152700,  10.503544500],
          [-66.520956000,  10.502995300],
          [-66.521454600,  10.502723800],
          [-66.521710100,  10.502493900],
          [-66.522338700,  10.501652300],
          [-66.522790600,  10.501059800],
          [-66.524015400,  10.499875300],
          [-66.525059600,  10.498684800],
          [-66.525885600,  10.498776800],
          [-66.526302600,  10.498988800],
          [-66.526708600,  10.499273800],
          [-66.527300600,  10.498783400],
          [-66.527547600,  10.498578800],
          [-66.528390400,  10.498495000],
          [-66.529902600,  10.498720800],
          [-66.530176900,  10.499014200],
          [-66.530304600,  10.499150800],
          [-66.530591600,  10.499695800],
          [-66.530833600,  10.500320800],
          [-66.531684200,  10.499754100],
          [-66.532055600,  10.499455800],
          [-66.532516800,  10.499265400],
          [-66.533436600,  10.499349800],
          [-66.534146600,  10.499513800],
          [-66.534885100,  10.499370300],
          [-66.535164600,  10.499288800],
          [-66.535796500,  10.499331900],
          [-66.536115800,  10.499730000],
          [-66.536420400,  10.500144800],
          [-66.536689200,  10.500530000],
          [-66.536977500,  10.500923600],
          [-66.537320600,  10.501291800],
          [-66.537720600,  10.501723800],
          [-66.537885800,  10.502057100],
          [-66.538015600,  10.502260800],
          [-66.538252600,  10.502958800],
          [-66.538444600,  10.502854800],
          [-66.539085600,  10.502224800],
          [-66.539135100,  10.501876100],
          [-66.539520900,  10.501193100],
          [-66.539924600,  10.500595800],
          [-66.540413600,  10.500339100],
          [-66.540756600,  10.500005800],
          [-66.541268300,  10.499828200],
          [-66.540974800,  10.499340900],
          [-66.540755100,  10.498758500],
          [-66.540491400,  10.498399600],
          [-66.540454500,  10.498250600],
          [-66.540473600,  10.497953500],
          [-66.540684100,  10.497772700],
          [-66.540715700,  10.497570500],
          [-66.540470600,  10.497059100],
          [-66.540221300,  10.496025500],
          [-66.539306700,  10.495086300],
          [-66.539279400,  10.494940900],
          [-66.539730100,  10.494578600],
          [-66.539735600,  10.494574500],
          [-66.539987300,  10.494140200],
          [-66.540191400,  10.493846200],
          [-66.540219100,  10.493760200],
          [-66.540122400,  10.493588200],
          [-66.540173000,  10.493250900],
          [-66.540153600,  10.493058800],
          [-66.540074600,  10.492856100],
          [-66.540055900,  10.492686400],
          [-66.540062500,  10.492517600],
          [-66.540039500,  10.492338800],
          [-66.539977400,  10.492196200],
          [-66.539961700,  10.492042600],
          [-66.539920600,  10.491931100],
          [-66.539825400,  10.491768400],
          [-66.539827600,  10.491670200],
          [-66.539885600,  10.491543900],
          [-66.539910200,  10.491296900],
          [-66.539887600,  10.491064500],
          [-66.539819200,  10.490842800],
          [-66.539878400,  10.490718200],
          [-66.539980000,  10.490685300],
          [-66.540053300,  10.490661600],
          [-66.540089100,  10.490513800],
          [-66.540078600,  10.490421700],
          [-66.540117300,  10.490299700],
          [-66.540166100,  10.490145600],
          [-66.540295000,  10.489939600],
          [-66.540366400,  10.489880800],
          [-66.540369200,  10.489841100],
          [-66.540487100,  10.488173700],
          [-66.540339900,  10.486815200],
          [-66.540330800,  10.486731600],
          [-66.540430200,  10.485995900],
          [-66.540764100,  10.485690500],
          [-66.540072700,  10.483267400],
          [-66.538488900,  10.483315000],
          [-66.537274500,  10.483271100],
          [-66.537112800,  10.483265300],
          [-66.536243700,  10.483259400],
          [-66.536215000,  10.483700100],
          [-66.535200900,  10.483240600],
          [-66.535001600,  10.483154800],
          [-66.534475900,  10.482928400],
          [-66.534418200,  10.482903500],
          [-66.533984500,  10.482733700],
          [-66.533962500,  10.482725100],
          [-66.533897100,  10.482699500],
          [-66.533872600,  10.482668800],
          [-66.534092600,  10.482246400],
          [-66.534538800,  10.481408700],
          [-66.534633800,  10.481233700],
          [-66.534703400,  10.481105300],
          [-66.534858600,  10.480804600],
          [-66.535087400,  10.480227700],
          [-66.535101200,  10.480192800],
          [-66.535125100,  10.480132500],
          [-66.535324800,  10.479809200],
          [-66.535741800,  10.479134400],
          [-66.535946200,  10.478776700],
          [-66.536106000,  10.478261300],
          [-66.536428300,  10.476847800],
          [-66.536922800,  10.474678900],
          [-66.537012200,  10.474266800],
          [-66.537111400,  10.473800200],
          [-66.537231400,  10.473560500],
          [-66.537457600,  10.473088600],
          [-66.537803600,  10.472368400],
          [-66.537328500,  10.471338500],
          [-66.536947800,  10.470772900],
          [-66.536432900,  10.471406500],
          [-66.536016900,  10.471918400],
          [-66.535986500,  10.471729300],
          [-66.534933300,  10.471365800],
          [-66.534004100,  10.471052000],
          [-66.533378600,  10.471238500],
          [-66.532948900,  10.469740600],
          [-66.532894000,  10.469837600],
          [-66.532800900,  10.470002400],
          [-66.532696000,  10.470274400],
          [-66.532567800,  10.470843400],
          [-66.532453300,  10.471351600],
          [-66.532379000,  10.471679800],
          [-66.532092100,  10.471518500],
          [-66.531860500,  10.471329500],
          [-66.531663500,  10.471168800],
          [-66.531505600,  10.471040000],
          [-66.531372100,  10.470792200],
          [-66.531314100,  10.470444500],
          [-66.531312200,  10.470438900],
          [-66.531228400,  10.470186700],
          [-66.531147800,  10.470069900],
          [-66.530973900,  10.469956000],
          [-66.530831300,  10.469890600],
          [-66.530315000,  10.469808400],
          [-66.529985600,  10.469744700],
          [-66.529165200,  10.469630400],
          [-66.529047500,  10.469619300],
          [-66.528657000,  10.469681900],
          [-66.528345900,  10.469634500],
          [-66.528099100,  10.469445200],
          [-66.527991200,  10.469400200],
          [-66.527882100,  10.469380000],
          [-66.527817500,  10.469385800],
          [-66.527659800,  10.469400000],
          [-66.527213100,  10.469435400],
          [-66.526999400,  10.469434000],
          [-66.526417900,  10.469215300],
          [-66.526247200,  10.469181700],
          [-66.526125000,  10.469188700],
          [-66.525882400,  10.469260300],
          [-66.525778800,  10.469305200],
          [-66.525652900,  10.469360100],
          [-66.525589600,  10.469390200],
          [-66.525453200,  10.469483600],
          [-66.525448700,  10.469486700],
          [-66.525253300,  10.469622500],
          [-66.525172800,  10.469679300],
          [-66.524883200,  10.469811200],
          [-66.524625700,  10.469832300],
          [-66.524370400,  10.469784900],
          [-66.524115400,  10.470498300],
          [-66.524082000,  10.470591800],
          [-66.524116300,  10.471046600],
          [-66.523869200,  10.471871000],
          [-66.523481900,  10.473445700],
          [-66.523426800,  10.473666100],
          [-66.523160500,  10.474731300],
          [-66.522770600,  10.475499700],
          [-66.522721100,  10.475597200],
          [-66.522710900,  10.475617300],
          [-66.522846400,  10.476465600] ]]}}]

function stylePolygon(feature) {
  return {
    weight: 1.5, // grosor de línea
    color: 'blue', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'yellow', // color de relleno
    fillOpacity: 0.18 // transparencia de relleno
  };
};

var polygon = new L.geoJson(geojsonFeaturePolygon, {
  style: stylePolygon
}).addTo(map);


//------------------------------------------------------







//------------------------------------------------------






//------------------------------------------------------


