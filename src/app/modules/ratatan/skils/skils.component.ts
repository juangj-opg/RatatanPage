import { Component } from '@angular/core';
import { Card } from '../../../models/Card';
import { Element } from '../../../models/Element';
import { Skill } from '../../../models/Skill';
import { SkillSlot } from '../../../models/SkillSlot';
import { CardSlot } from '../../../models/CardSlot';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css',
})
export class SkilsComponent {
  selectedRarity = 3;
  selectedElement = 0;
  selectedCard: number = 0;

  elements: Element[] = [
    { name: 'Fuego', srcImg: 'AttributeIcon_PC000_Fire.png' },
    { name: 'Agua', srcImg: 'AttributeIcon_PC002_Water.png' },
    { name: 'Hielo', srcImg: 'AttributeIcon_PC003_Ice.png' },
    { name: 'Veneno', srcImg: 'AttributeIcon_PC006_Poison.png' },
    { name: 'Rayo', srcImg: 'AttributeIcon_PC001_Thunder.png' },
    { name: 'Viento', srcImg: 'AttributeIcon_PC007_Wind.png' },
  ];

  skills: SkillSlot[] = [
    // Fuego
    {
      skills: [
        {
          title: 'Explosión Ardiente+',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_101m.png',
        },
        {
          title: 'Explosión Flameante+',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_102m.png',
        },
        {
          title: 'Arde sin Cesar',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_103m.png',
        },
        {
          title: 'Fuego del Terror',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_104m.png',
        },
        {
          title: 'Guerrero Osado',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_105m.png',
        },
        {
          title: 'Defensa Brava',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_106m.png',
        },
        {
          title: 'Bola Fuego+',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_107m.png',
        },
        {
          title: 'Fuego Aliado',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_108m.png',
        },
        {
          title: 'Bum Bum',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_109m.png',
        },
        {
          title: 'Sacrificio Honorable',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_110m.png',
        },
        {
          title: 'Muro del coleccionista',
          elementType: 'fire',
          srcImg: 'icn_ratacarta01_fire_111m.png',
        },
      ],
    },
    // Agua
    {
      skills: [
        {
          title: 'Chapoteo Normal+',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_201m.png',
        },
        {
          title: 'Chapoteo Especial+',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_202m.png',
        },
        {
          title: 'Chapoteo Combo',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_203m.png',
        },
        {
          title: 'Barrera Salpicante',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_204m.png',
        },
        {
          title: 'Barrera Salpicante+',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_205m.png',
        },
        {
          title: 'Chapoteo Primordial',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_206m.png',
        },
        {
          title: 'Escudo Torbellino+',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_207m.png',
        },
        {
          title: 'Chapoteo Supremo',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_208m.png',
        },
        {
          title: 'Salto Marino',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_209m.png',
        },
        {
          title: 'Barrera Inflada',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_210m.png',
        },
        {
          title: 'Poder del Oasis',
          elementType: 'water',
          srcImg: 'icn_ratacarta02_water_211m.png',
        },
      ],
    },
    // Hielo
    {
      skills: [
        {
          title: 'Mordida Gélida+',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_301m.png',
        },
        {
          title: 'Ventisca Especial+',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_302m.png',
        },

        {
          title: 'Piel Helada',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_303m.png',
        },

        {
          title: 'Golpe Pulverizante',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_304m.png',
        },

        {
          title: 'Reto Gélido',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_305m.png',
        },

        {
          title: 'Cura Glacial',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_306m.png',
        },

        {
          title: 'Gran Final',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_307m.png',
        },

        {
          title: 'Furia Gélida',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_308m.png',
        },

        {
          title: 'Entrada Triunfal',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_309m.png',
        },

        {
          title: 'Minueto Macho',
          elementType: 'ice',
          srcImg: 'icn_ratacarta03_ice_310m.png',
        },
      ],
    },
    // Veneno
    {
      skills: [
        {
          title: 'Puño Veneno+',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_401m.png',
        },
        {
          title: 'Veneno Especial+',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_402m.png',
        },
        {
          title: 'Corrupción Tóxica',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_403m.png',
        },
        {
          title: 'Miasma Tóxico',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_404m.png',
        },
        {
          title: 'Maldición Tóxica',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_405m.png',
        },
        {
          title: 'Caída Tóxica+',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_406m.png',
        },
        {
          title: 'Polución',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_407m.png',
        },
        {
          title: 'Picadura Venenosa',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_408m.png',
        },
        {
          title: 'Colector',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_409m.png',
        },
        {
          title: 'Aniquila Jefes',
          elementType: 'poison',
          srcImg: 'icn_ratacarta04_poison_410m.png',
        },
      ],
    },
    // Rayo
    {
      skills: [
        {
          elementType: 'thunder',
          title: 'Golpe Eléctrico+',
          srcImg: 'icn_ratacarta05_thunder_501m.png',
        },
        {
          elementType: 'thunder',
          title: 'Golpe Eléctrico Especial+',
          srcImg: 'icn_ratacarta05_thunder_502m.png',
        },
        {
          elementType: 'thunder',
          title: 'Choque Estático',
          srcImg: 'icn_ratacarta05_thunder_503m.png',
        },
        {
          elementType: 'thunder',
          title: 'Bondad del Trueno',
          srcImg: 'icn_ratacarta05_thunder_504m.png',
        },
        {
          elementType: 'thunder',
          title: 'Electrocuperación',
          srcImg: 'icn_ratacarta05_thunder_505m.png',
        },
        {
          elementType: 'thunder',
          title: 'Amplificador',
          srcImg: 'icn_ratacarta05_thunder_506m.png',
        },
        {
          elementType: 'thunder',
          title: 'Carga Relámpago+',
          srcImg: 'icn_ratacarta05_thunder_507m.png',
        },
        {
          elementType: 'thunder',
          title: 'Descarga Extra*',
          srcImg: 'icn_ratacarta05_thunder_508m.png',
        },
        {
          elementType: 'thunder',
          title: 'Vals Mágico',
          srcImg: 'icn_ratacarta05_thunder_509m.png',
        },
        {
          elementType: 'thunder',
          title: 'Autocarga',
          srcImg: 'icn_ratacarta05_thunder_510m.png',
        },
      ],
    },
    // Viento
    {
      skills: [
        {
          elementType: 'wind',
          title: 'Golpe Remolino+',
          srcImg: 'icn_ratacarta07_wind_701m.png',
        },
        {
          elementType: 'wind',
          title: 'Golpe Remolino Especial+',
          srcImg: 'icn_ratacarta07_wind_702m.png',
        },
        {
          elementType: 'wind',
          title: 'Huracán Infernal',
          srcImg: 'icn_ratacarta07_wind_703m.png',
        },
        {
          elementType: 'wind',
          title: 'Huracán Demoníaco',
          srcImg: 'icn_ratacarta07_wind_704m.png',
        },
        {
          elementType: 'wind',
          title: 'Combo Huracán',
          srcImg: 'icn_ratacarta07_wind_705m.png',
        },
        {
          elementType: 'wind',
          title: 'Tornado Demoledor+',
          srcImg: 'icn_ratacarta07_wind_706m.png',
        },
        {
          elementType: 'wind',
          title: 'Mega Vendaval',
          srcImg: 'icn_ratacarta07_wind_707m.png',
        },
        {
          elementType: 'wind',
          title: 'Destructor de Jefes',
          srcImg: 'icn_ratacarta07_wind_708m.png',
        },
        {
          elementType: 'wind',
          title: 'Reembolso de la Suerte',
          srcImg: 'icn_ratacarta07_wind_709m.png',
        },
        {
          elementType: 'wind',
          title: 'Ka-ching Crítico',
          srcImg: 'icn_ratacarta07_wind_710m.png',
        },
      ],
    },
  ];

  cards: CardSlot[] = [
    {
      // Fuego
      cards: [
        {
          title: 'Explosión Ardiente+',
          desc: 'Ataques Normales crean una explosión que causa un {0}% de daño extra e inflige Quemadura.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [15, 25, 35, 45],
          srcImg: 'icn_ratacarta01_fire_101.png',
        },
        {
          title: 'Explosión Flameante+',
          desc: 'Técnicas Especiales crean una explosión que causa un {0}% de daño extra e inflige Quemadura.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [15, 25, 35, 45],
          srcImg: 'icn_ratacarta01_fire_102.png',
        },
        {
          title: 'Arde sin Cesar',
          desc: 'Poder de ataque enemigo disminuye por {0}% mientras sufre de Quemadura.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 40],
          srcImg: 'icn_ratacarta01_fire_103.png',
        },
        {
          title: 'Fuego del Terror',
          desc: 'Quemadura hace que los Teshita huyan por {0} segundos.',
          element: 'Fire',
          rarityLvl: [1, 2, 3],
          variableLvl: [2, 3, 4],
          srcImg: 'icn_ratacarta01_fire_104.png',
        },
        {
          title: 'Guerrero Osado',
          desc: 'Aumenta el poder de ataque {0}% en base a cuantos PS perdió el Ratatan.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [25, 50, 75, 100],
          srcImg: 'icn_ratacarta01_fire_105.png',
        },
        {
          title: 'Defensa Brava',
          desc: 'Reduce el daño recibido por {0}% mientras los PS del Ratatan estén al 50% o menos.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 50],
          srcImg: 'icn_ratacarta01_fire_106.png',
        },
        {
          title: 'Bola Fuego+',
          desc: 'Daño de Fuerza Elemental de Fuego aumenta por {0}%.',
          element: 'Fire',
          rarityLvl: [2, 3],
          variableLvl: [50, 100],
          srcImg: 'icn_ratacarta01_fire_107.png',
        },
        {
          title: 'Fuego Aliado',
          desc: 'Regenera {0}% de PS cada 2 segundos cerca de enemigos Quemados cuando los PS están debajo del 30%.',
          element: 'Fire',
          rarityLvl: [1, 2, 3],
          variableLvl: [2, 3, 5],
          srcImg: 'icn_ratacarta01_fire_108.png',
        },
        {
          title: 'Bum Bum',
          desc: 'Constantemente crea explosiones cerca del Ratatan, causando un daño igual al {0}% de los máx. PS del mismo.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 50],
          srcImg: 'icn_ratacarta01_fire_109.png',
        },
        {
          title: 'Sacrificio Honorable',
          desc: 'Sacrifica algo de PS para aumentar temporalmente el poder de ataque de las Técnicas Especiales por {0}%.',
          element: 'Fire',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 50],
          srcImg: 'icn_ratacarta01_fire_110.png',
        },
        {
          title: 'Muro del coleccionista',
          desc: 'Cada objeto que obtengas reduce el daño recibido por {0}% (máx 10%).',
          element: 'Fire',
          rarityLvl: [2, 3],
          variableLvl: [1, 2],
          srcImg: 'icn_ratacarta01_fire_111.png',
        },
      ],
    },
    {
      // Agua
      cards: [
        {
          title: 'Chapoteo Normal+',
          desc: 'Un efecto de agua salpicando al conectar Ataques Normales, que causa un {0}% de daño extra.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [25, 40, 55, 70],
          srcImg: 'icn_ratacarta02_water_201.png',
        },
        {
          title: 'Chapoteo Especial+',
          desc: 'Un efecto de agua salpicando al conectar Técnicas Especiales, que causa un {0}% de daño extra.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [25, 40, 55, 70],
          srcImg: 'icn_ratacarta02_water_202.png',
        },
        {
          title: 'Chapoteo Combo',
          desc: 'Derrotar enemigos con chapoteo crea un efecto adicional del mismo que causa +{0}% de daño.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [15, 20, 25, 30],
          srcImg: 'icn_ratacarta02_water_203.png',
        },
        {
          title: 'Barrera Salpicante',
          desc: 'Gana una barrera de {0} puntos al inicio del combate.',
          element: 'Water',
          rarityLvl: [1, 2, 3],
          variableLvl: [20, 30, 40],
          srcImg: 'icn_ratacarta02_water_204.png',
        },
        {
          title: 'Barrera Salpicante+',
          desc: 'Aumenta la fuerza de la barrera por {0}% cuando se adquiere.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 40, 50],
          srcImg: 'icn_ratacarta02_water_205.png',
        },
        {
          title: 'Chapoteo Primordial',
          desc: 'Aumenta el poder de ataque por {0}% por 30 segundos al inicio del combate.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 50],
          srcImg: 'icn_ratacarta02_water_206.png',
        },
        {
          title: 'Escudo Torbellino+',
          desc: 'Aumenta la fuerza máx. de la barrera por {0}%.',
          element: 'Water',
          rarityLvl: [2, 3],
          variableLvl: [25, 50],
          srcImg: 'icn_ratacarta02_water_207.png',
        },
        {
          title: 'Chapoteo Supremo',
          desc: 'Aumenta el daño de salpicadura por {0}% causando empuje.',
          element: 'Water',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [30, 60, 90, 120],
          srcImg: 'icn_ratacarta02_water_208.png',
        },
        {
          title: 'Salto Marino',
          desc: 'Saltar crea un orbe de agua causando 20 de daño + {0}% de barrera a los enemigos cerca.',
          element: 'Water',
          rarityLvl: [1, 2, 3],
          variableLvl: [150, 180, 200],
          srcImg: 'icn_ratacarta02_water_209.png',
        },
        {
          title: 'Barrera Inflada',
          desc: 'Los PM se recuperan por {0}% por segundo mientras la barrera esté arriba.',
          element: 'Water',
          rarityLvl: [2, 3],
          variableLvl: [1, 2],
          srcImg: 'icn_ratacarta02_water_210.png',
        },
        {
          title: 'Poder del Oasis',
          desc: 'Poder de ataque aumenta {0}% al utilizar manantiales curativos.',
          element: 'Water',
          rarityLvl: [1, 2, 3],
          variableLvl: [5, 7, 10],
          srcImg: 'icn_ratacarta02_water_211.png',
        },
      ],
    },
    {
      // Hielo
      cards: [
        {
          title: 'Mordida Gélida+',
          desc: 'Daño de Ataque Normal aumenta {0}% y tiene chance de causar Congelar.',
          element: 'Ice',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [20, 25, 35, 45],
          srcImg: 'icn_ratacarta03_ice_301.png',
        },
        {
          title: 'Ventisca Especial+',
          desc: 'Daño de Técnica Especial aumenta {0}% y tiene chance de causar Congelar.',
          element: 'Ice',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [20, 25, 35, 45],
          srcImg: 'icn_ratacarta03_ice_302.png',
        },
        {
          title: 'Piel Helada',
          desc: 'Teshitas y la fauna nativa sufren de un -{0}% de velocidad de movimiento cuando Congelar termina.',
          element: 'Ice',
          rarityLvl: [1, 2, 3],
          variableLvl: [40, 60, 80],
          srcImg: 'icn_ratacarta03_ice_303.png',
        },
        {
          title: 'Golpe Pulverizante',
          desc: 'Atacar enemigos Congelados cuando sus PS están bajos, rompe el hielo causando {0}% de daño extra.',
          element: 'Ice',
          rarityLvl: [1, 2, 3],
          variableLvl: [500, 1000, 1500],
          srcImg: 'icn_ratacarta03_ice_304.png',
        },
        {
          title: 'Reto Gélido',
          desc: 'Aumenta la fuerza por {0}% mientras los PS del Ratatan estén al 75% o más.',
          element: 'Ice',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [15, 25, 35, 50],
          srcImg: 'icn_ratacarta03_ice_305.png',
        },
        {
          title: 'Cura Glacial',
          desc: 'Aumenta los PS recuperados. Recupera {0}% de los PS máx al obtenerlo..',
          element: 'Ice',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 30, 45, 75],
          srcImg: 'icn_ratacarta03_ice_306.png',
        },
        {
          title: 'Gran Final',
          desc: 'Recupérate al máx. si los PS están al {0}% o más al final del combate.',
          element: 'Ice',
          rarityLvl: [1, 2, 3],
          variableLvl: [75, 60, 50],
          srcImg: 'icn_ratacarta03_ice_307.png',
        },
        {
          title: 'Furia Gélida',
          desc: 'Los enemigos Congelados reciben +{0}% de daño.',
          element: 'Ice',
          rarityLvl: [2, 3],
          variableLvl: [75, 100],
          srcImg: 'icn_ratacarta03_ice_308.png',
        },
        {
          title: 'Entrada Triunfal',
          desc: 'Recupera {0}% PS cada 2 segundos los primeros 30 segundos del combate.',
          element: 'Ice',
          rarityLvl: [2, 3],
          variableLvl: [2, 4],
          srcImg: 'icn_ratacarta03_ice_309.png',
        },
        {
          title: 'Minueto Macho',
          desc: 'La vida máxima sube {0} puntos por cada boss derrotado.',
          element: 'Ice',
          rarityLvl: [2, 3],
          variableLvl: [10, 15],
          srcImg: 'icn_ratacarta03_ice_310.png',
        },
      ],
    },
    {
      // Veneno
      cards: [
        {
          title: 'Puño Veneno+',
          desc: 'Ataques Normales causan Veneno en los enemigos.',
          element: 'Poison',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [0, 0, 0, 0],
          srcImg: 'icn_ratacarta04_poison_401.png',
        },
        {
          title: 'Veneno Especial+',
          desc: 'Técnicas Especiales causan Veneno en los enemigos.',
          element: 'Poison',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [0, 0, 0, 0],
          srcImg: 'icn_ratacarta04_poison_402.png',
        },
        {
          title: 'Corrupción Tóxica',
          desc: 'Enemigos Envenedados sufres -{0}% en su defensa.',
          element: 'Poison',
          rarityLvl: [1, 2, 3],
          variableLvl: [10, 30, 50],
          srcImg: 'icn_ratacarta04_poison_403.png',
        },
        {
          title: 'Miasma Tóxico',
          desc: 'Al derrotar a enemigos envenedados se propaga una niebla venenosa.',
          element: 'Poison',
          rarityLvl: [3],
          variableLvl: [0],
          srcImg: 'icn_ratacarta04_poison_404.png',
        },
        {
          title: 'Maldición Tóxica',
          desc: 'Teshitas y la fauna nativa sufren de un -{0}% de velocidad de movimiento al estar Envenenados.',
          element: 'Poison',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [40, 50, 60, 80],
          srcImg: 'icn_ratacarta04_poison_405.png',
        },
        {
          title: 'Caída Tóxica+',
          desc: 'Daño de Fuerza Elemental Venenosa aumentapor {0}%.',
          element: 'Poison',
          rarityLvl: [1, 2],
          variableLvl: [50, 100],
          srcImg: 'icn_ratacarta04_poison_406.png',
        },
        {
          title: 'Polución',
          desc: '20% de chane de infligir +{0}% de daño a enemigos Envenenados.',
          element: 'Poison',
          rarityLvl: [2, 3],
          variableLvl: [75, 100],
          srcImg: 'icn_ratacarta04_poison_407.png',
        },
        {
          title: 'Picadura Venenosa',
          desc: 'Daño Venenoso se activa {0}% más rápido..',
          element: 'Poison',
          rarityLvl: [0, 1, 2],
          variableLvl: [20, 25, 30],
          srcImg: 'icn_ratacarta04_poison_408.png',
        },
        {
          title: 'Colector',
          desc: 'Aumenta la cantidad de objetos adquiridos por {0}.',
          element: 'Poison',
          rarityLvl: [2, 3],
          variableLvl: [1, 2],
          srcImg: 'icn_ratacarta04_poison_409.png',
        },
        {
          title: 'Aniquila Jefes',
          desc: 'Inflige +{0}% de daño a los jefes.',
          element: 'Poison',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 15, 20, 25],
          srcImg: 'icn_ratacarta04_poison_410.png',
        },
      ],
    },
    {
      // Rayo
      cards: [
        {
          title: 'Golpe Eléctrico+',
          desc: 'Ataques Normales causan Parálisis en los enemigos.',
          element: 'Thunder',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [0, 0, 0, 0],
          srcImg: 'icn_ratacarta05_thunder_501.png',
        },
        {
          title: 'Golpe Eléctrico Especial+',
          desc: 'Técnicas Especiales causan Parálisis en los enemigos.',
          element: 'Thunder',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [0, 0, 0, 0],
          srcImg: 'icn_ratacarta05_thunder_502.png',
        },
        {
          title: 'Choque Estático',
          desc: 'Daño de Parálisis aumenta {0}% e incapacita brevemente a los enemigos.',
          element: 'Thunder',
          rarityLvl: [1, 2, 3],
          variableLvl: [25, 50, 100],
          srcImg: 'icn_ratacarta05_thunder_503.png',
        },
        {
          title: 'Bondad del Trueno',
          desc: '{0} chance de reducir el costo de PM a 0 de Habilidad o Técnica Especial.',
          element: 'Thunder',
          rarityLvl: [1, 2, 3],
          variableLvl: [15, 33, 50],
          srcImg: 'icn_ratacarta05_thunder_504.png',
        },
        {
          title: 'Electrocuperación',
          desc: 'Recupera {0}% de PM cuando derrotas un enemigo con Técnicas Especiales',
          element: 'Thunder',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [1, 2, 3, 5],
          srcImg: 'icn_ratacarta05_thunder_505.png',
        },
        {
          title: 'Amplificador',
          desc: 'Usar Técnicas Especiales aumenta el daño de Ataques Normales {0}% por 6 segundos.',
          element: 'Thunder',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [20, 30, 50, 75],
          srcImg: 'icn_ratacarta05_thunder_506.png',
        },
        {
          title: 'Carga Relámpago+',
          desc: 'Técnicas Especiales tienen un +{0}% de chance de lanzar rayos adicionales.',
          element: 'Thunder',
          rarityLvl: [2, 3],
          variableLvl: [50, 100],
          srcImg: 'icn_ratacarta05_thunder_507.png',
        },
        {
          title: 'Descarga Extra*',
          desc: 'El daño de Parálisis se activa {0} veces mientras el enemigo esté Paralizado',
          element: 'Thunder',
          rarityLvl: [2, 3],
          variableLvl: [1, 2],
          srcImg: 'icn_ratacarta05_thunder_508.png',
        },
        {
          title: 'Vals Mágico',
          desc: 'MP Máximo sube un {0}% por cada boss derrotado.',
          element: 'Thunder',
          rarityLvl: [2, 3],
          variableLvl: [3, 5],
          srcImg: 'icn_ratacarta05_thunder_509.png',
        },
        {
          title: 'Autocarga',
          desc: 'Se recupera 10 de PM cada {0} segundos mientras haya enemigos cerca Paralizados.',
          element: 'Thunder',
          rarityLvl: [1, 2, 3],
          variableLvl: [4, 3, 1.5],
          srcImg: 'icn_ratacarta05_thunder_510.png',
        },
      ],
    },
    {
      // Viento
      cards: [
        {
          title: 'Golpe Remolino+',
          desc: 'Ataques Normales tienen un +{0}% de chance de ser críticos.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [40, 50, 60, 70],
          srcImg: 'icn_ratacarta07_wind_701.png',
        },
        {
          title: 'Golpe Remolino Especial+',
          desc: 'Técnicas Especiales tienen un +{0}% de chance de ser críticos.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [40, 50, 60, 70],
          srcImg: 'icn_ratacarta07_wind_702.png',
        },
        {
          title: 'Huracán Infernal',
          desc: 'Los Cobun dejan de moverse al atacar pero ganan {0}% más de daño crítico.',
          element: 'Wind',
          rarityLvl: [1, 2, 3],
          variableLvl: [50, 75, 100],
          srcImg: 'icn_ratacarta07_wind_703.png',
        },
        {
          title: 'Huracán Demoníaco',
          desc: 'Golpes críticos causan +{0}% de daño extremo si los PS enemigos están bajo cierto nivel.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [50, 100, 150, 200],
          srcImg: 'icn_ratacarta07_wind_704.png',
        },
        {
          title: 'Combo Huracán',
          desc: 'Golpes críticos infligen +{0}% de daño y empuje.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [30, 60, 90, 120],
          srcImg: 'icn_ratacarta07_wind_705.png',
        },
        {
          title: 'Tornado Demoledor+',
          desc: '{0} tornados aparecen cuando se usa la Fuerza Elemental de Viento.',
          element: 'Wind',
          rarityLvl: [2, 3],
          variableLvl: [1, 2],
          srcImg: 'icn_ratacarta07_wind_706.png',
        },
        {
          title: 'Mega Vendaval',
          desc: 'Enemigos empujados reciben +{0}% de de daño extremo si los PS enemigos están bajo cierto nivel.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [50, 100, 150, 200],
          srcImg: 'icn_ratacarta07_wind_707.png',
        },
        {
          title: 'Destructor de Jefes',
          desc: 'El daño crítico sube un {0}% por cada boss derrotado (máximo 100%).',
          element: 'Wind',
          rarityLvl: [2, 3],
          variableLvl: [5, 10],
          srcImg: 'icn_ratacarta07_wind_708.png',
        },
        {
          title: 'Reembolso de la Suerte',
          desc: '{0}% de chance de recibir algo de dinero de vuelta al comprar objeto de la Tienda.',
          element: 'Wind',
          rarityLvl: [0, 1, 2, 3],
          variableLvl: [10, 20, 30, 50],
          srcImg: 'icn_ratacarta07_wind_709.png',
        },
        {
          title: 'Ka-ching Crítico',
          desc: 'Gana +{0} tokens cuando derrotas enemigos con ataques críticos.',
          element: 'Wind',
          rarityLvl: [1, 2, 3],
          variableLvl: [5, 7, 10],
          srcImg: 'icn_ratacarta07_wind_710.png',
        },
      ],
    },
  ];

  getRarityIndex(card: Card, raritySlot: number) {
    let findIndex = card.rarityLvl.findIndex((r) => r == raritySlot);
    return findIndex >= 0 ? findIndex : 0;
  }

  selectSkill(skill: Skill) {
    let findIndex = this.cards[this.selectedElement].cards.findIndex((c) => c.title == skill.title);
    if (findIndex != -1) this.selectedCard = findIndex;
    console.log(this.selectedCard);
  }

  selectRarity(rarity: number) {
    this.selectedRarity = rarity;
  }

  advanceRarity(card: Card) {
    let indexActual =
      card.rarityLvl.findIndex((rarity) => rarity == this.selectedRarity) >= 0
        ? card.rarityLvl.findIndex((rarity) => rarity == this.selectedRarity)
        : 0;

    if (card.rarityLvl[indexActual + 1] == undefined)
      this.selectedRarity = card.rarityLvl[0];
    else this.selectedRarity++;
  }
}
