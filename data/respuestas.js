const entrevistas = [
    {
        "id": 0,
        "pic": 'ary.jpg',
        "nombre": "Ariadna Moreno Román",
        "anyo": "4to",
        "facultad": "Ing. Informatica",
        "centro": "Hospital Salvador Allende",
        "respuestas": [
            {
            "pregunta": "¿Por qué te incorporaste como voluntario?",
            "respuesta": "Me incorporé pq necesitaba sentirme útil, estar en un lugar donde sintiera que realmente estaba luchando contra la pandemia, y la universidad llamó y no hizo falta pensarlo dos veces"
            },
            {
            "pregunta": "¿Qué sucedió luego de confirmarte que ibas al Hospital?",
            "respuesta": "Luego de saber que íbamos para allá nada...recoger las cosas y prepararme psicólogicamente para ir para un lugar lleno de personas que podían estar infectadas, dónde había q cuidarse al máximo...y lo más duro antes de entrar fue el PCR, esperar ese resultado es una tensión tan fuerte que no se explicar...y si despues de alistarme estoy contagiada y no puedo ayudar? Pero todo salió bien"
            },
            {
            "pregunta": "¿Qué dijeron tus padres?",
            "respuesta": "Primero me dijeron que no me arriesgara tanto, que me quedara tranquila ayudando en el SAF. Pero después entendieron que era donde más hacia falta y que era donde tenía que estar, y me apoyaron a pesar de su preocupación."
            },
            {
            "pregunta": "Llegaste al lugar... cuéntanos tu primer día",
            "respuesta": "El primer día...fue bueno, nos ubicamos en cuartos y salas y nos dijeron lo q íbamos a hacer...me tocaba ser asistent de enfermería, yo, que de enfermería no tenía ni idea...según me 3xplicaron tenía q ayudar a alimentar y bañarse a pacientes inmovilizados, ayudar a repartir medicamento, sacar la ropa de la sala, y ayudar con el típico papeleo de una sala médica...ese día solo había 3 pacientes, lo duró llegó después jjj"
            },
            {
            "pregunta": "¿Sentiste miedo? ¿Pensaste en rendirte en algún momento?",
            "respuesta": "Miedo sentí varias veces, es normal, cada vez que un paciente daba positivo me ponía a pensar en cuanto contacto había tenido con él, y aunque hubiese sido mínimo la preocupación era inmensa. Pero rendirme nunca pasó por mi cabeza, la sonrisa de los pacientes con cualquier ayuda q les dábamos era suficiente para seguir, fuimos con objetivo y no nos podíamos rajar"
            },
            {
            "pregunta": "¿Cómo se apoyaban entre los voluntarios?",
            "respuesta": "Nosotros nos convertimos en familia. La ayuda venía desde el café de por la mañana q compartíamos a buchitos, el calentador que era solo uno para casi 20 personas y también lo compartíamos, hasta compartir las tareas en las salas para terminar temprano. En el aislamiento celebramos cumpleaños, secamos lágrimas, calmamos tensiones...ninguno de nosotros estuvo solo nunca"
            },
            {
            "pregunta": "¿Qué fué lo más difícil que tuviste que enfrentar?",
            "respuesta": "Lo más difícil que enfrenté fue el trato con pacientes inmovilizados...yo no le había dado la comida ni a un bebé, y estaba allí alimentando a señoras que a penas se movían, que cada vez que pasaba por al lado de su cuarto entraba para ver si aún respiraban, y me aterraba que les pudiera pasar algo."
            },
            {
            "pregunta": "¿Cuál era tu último pensamiento cada noche?",
            "respuesta": "Mi último pensamiento cada día era: que mañana haya menos casos, que se acabe esto pronto ya. Y pensaba que ya habíamos vencido un día más"
            },
            {
            "pregunta": "¿Guardas alguna anécdota que marcará tu paso como voluntario?",
            "respuesta": "Una anécdota...pues tuvimos un paciente esquizofrénico y con retraso mental severo, que se pasaba el día entero tratando de fugarse, se daba golpes, etc...ese señor a mi me da daba un miedo que no puedo explicar, y tuve que darle la comida como dos días hasta q le dieron de alta...lo tenían amarrado a la cama para que no se fugara más...y yo rezaba cada minuto para que él terminara de comer rápido y poder salir de su cuarto porque me sentía remal."
            },
            {
            "pregunta": "¿Volverías a incorporarte?",
            "respuesta": "Seguro q volvería a incorporarme, fue de las mejores experiencias que he vivido, la satisfacción de estar en el bando de los que combaten la enfermedad, ayudar a los pacientes, y además conocer personas maravillosas, volvería a hacerlo 1000 veces si es necesario"
            },
            {
            "pregunta": "¿Que dirías a tus familiares y amigos sobre tu misión?",
            "respuesta": "A todos mis conocidos les diría que se cuiden, porque solo viviendo en carne propia esta experiencia se puede saber la realidad de la enfermedad, que no tiene rostro, que ataca a cualquiera, y terminamos afectando a los más ancianos, que tienen muchas más complicaciones para su vida y que pueden no rebasar la enfermedad. La mejor manera de ser consecuente con el sacrificio que hicimos estos grupos de jóvenes y que hacen los trabajadores de la salud, es cuidarse."
            },
            {
            "pregunta": "Resume con una palabra esos 14 días",
            "respuesta": "Altruismo"
            },
            {
            "pregunta":  "¿Desde tu especialidad como crees que puedes aportar al buen funcionamiento del hospital?",
            "respuesta": "Lo primero que haría falta sería al menos (si se pudieran más, pues mejor) una PC por sala, y algún lugar ya sea en la dirección del hospital o en algún otro sitio que destinen para eso una oficina para que sirva de centro de datos y tenga los servidores, trabajen los administradores del sistema...es decir, un nodo Central.\n"+
            "Procesos a automatizar:\n"+
            "• Recepción de los pacientes (en el hospital y luego en las salas), esto luego de q los pacientes estén de alta debe persistir para tener un histórico de todas las personas que ingresaron alguna vez allí para cualquier estudio q se haga o si hace falta localizar a alguien...eso siempre es necesario\n• Evoluciones médicas y de enfermería (son actualizaciones del estado del paciente que se hacen cada 12 horas por médicos y enfermeros de manera independiente)...si se crea un perfil por cada paciente que ingresa está información se puede escribir ahí y al momento de dar el alta se imprime una ficha completa con las evoluciones de cada día\n"+
            "• Evoluciones médicas y de enfermería (son actualizaciones del estado del paciente que se hacen cada 12 horas por médicos y enfermeros de manera independiente)...si se crea un perfil por cada paciente que ingresa está información se puede escribir ahí y al momento de dar el alta se imprime una ficha completa con las evoluciones de cada día\n"+
            "• Hay muchos pacientes casos sociales que llegan sin dirección, sin carnet de identidad, etc...debería existir alguna manera de obtener esos datos del minint, q son los q cuentan con la información de todas las personas dentro del país, al menos datos esenciales durante su estadía allí y bajo confidencialidad claro está\n"+
            "• Contrareferencias y remisiones médicas...es la misma historia, escribirlo sobre el perfil de cada paciente y cuando se vaya imprimirlo, en caso de q vaya para otro hospital es demasiada responsabilidad darle un documento tan sensible al propio paciente para q lo lleve y lo entregue él mismo (así es como yo ví q lo hacían), si un sistema se monta en todos los hospitales eso se puede mandar por una vía más segura (nosotros vivimos como una señora q se fue remitida para otro hospital al dia siguiente no aparecía)\n"+
            "• Estado de pacientes (es una hoja con las camas de ocupa cada paciente en la sala en tiempo real) como los pacientes van y vienen con tanta rapidez esto hay q escribirlo todos los días, totalmente innecesario\n"+
            "• Y las indicaciones médicas son los medicamentos q debe tomar cada paciente cada día, q también se escriben todos los días en una hojita y siempre son las mismas... innecesario también\n"
            },
            {
            "pregunta": "¿Qué piensas hacer ahora que ya cumpliste la misión y el aislamiento?",
            "respuesta": "Luego de haber salido del hospital y del aislamiento sigo en el SAF llevando comida a los viejitos, y esperando a cualquier otra tarea que haya que hacer, ir a trabajar al campo, volver a entrar al hospital, lo que sea por ayudar."
            }
        ]
    },
];
/*
    {
        id: '',
        pic: '',
        nombre: "",
        anyo: "",
        facultad: "Ing. Informatica",
        centroAislamiento: "",
        respuestas: [
            {
            pregunta: "¿Por qué te incorporaste como voluntario?",
            respuesta: ""
            },
            {
            pregunta: "¿Qué sucedió luego de confirmarte que ibas al Hospital?",
            respuesta: ""
            },
            {
            pregunta: "¿Qué dijeron tus padres?",
            respuesta: ""
            },
            {
            pregunta: "Llegaste al lugar... cuéntanos tu primer día",
            respuesta: ""
            },
            {
            pregunta: "¿Sentiste miedo? ¿Pensaste en rendirte en algún momento?",
            respuesta: ""
            },
            {
            pregunta: "¿Qué fué lo más difícil que tuviste que enfrentar?",
            respuesta: ""
            },
            {
            pregunta: "¿Cuál era tu último pensamiento cada noche?",
            respuesta: ""
            },
            {
            pregunta: "¿Guardas alguna anécdota que marcará tu paso como voluntario?",
            respuesta: ""
            },
            {
            pregunta: "¿Volverías a incorporarte?",
            respuesta: ""
            },
            {
            pregunta: "¿Que dirías a tus familiares y amigos sobre tu misión?",
            respuesta: ""
            },
            {
            pregunta: "Resume con una palabra esos 14 días",
            respuesta: ""
            },
            {
            pregunta:  "¿Desde tu especialidad como crees que puedes aportar al buen funcionamiento del hospital?",
            respuesta: ""
            },
            {
            pregunta: "¿Qué piensas hacer ahora que ya cumpliste la misión y el aislamiento?",
            respuesta: ""
            }
        ]
    }
*/
