import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleSpanish: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Cómo usar a Tourney',
    description: 'Aprende a usar a Tourney para tu comunidad',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'Crear una nueva cuenta',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (Este paso es solo para socios de game.tv. Si está creando torneos en su propio servidor, vaya al paso 2.) Comparta su apodo de Discord y su ID de usuario con el admin de game.tv',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'El apodo de Discord debe incluir una etiqueta numérica de 4 dígitos',
              steps: [
                "ID de discord: así es como puedes encontrar tu ID de usuario <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                'Espera a que el administrador de game.tv te confirme que la cuenta se ha configurado para la creación del torneo.',
              ],
            },
          ],
        },
        {
          title:
            "2. Visita<a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Haga clic en "Iniciar sesión con Discord"',
            },
            {
              imageCaption: 'Haga clic en "Autorizar"',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Configuración de Tourney Bot para su servidor Discord',
      navSectionItems: [
        {
          title:
            '1. Desde su menú principal a la izquierda, haga clic en el botón "Crear torneo"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Desde la página de Plantillas de torneo, busca el juego para el que deseas crear el torneo y haz clic en Personalizar.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. En la página Personalizar torneo, haga clic en Agregar otro enlace de servidor.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. El navegador aparecerá y mostrará la interfaz de usuario de Discord, pidiéndole que seleccione un servidor para agregar el Bot.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Solo los servidores en los que usted sea el administrador aparecerán en el menú desplegable.',
                'Seleccione el servidor que desea instalar el bot, luego haga clic en Autorizar.',
              ],
            },
          ],
        },
        {
          title:
            '5. Cuando se autorice correctamente, obtendrá una pantalla de confirmación en el mismo navegador. Ahora Tourney Bot está instalado en su servidor Discord.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Verifique su servidor Discord para asegurarse de que el bot ha sido instalado.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png',
            },
          ],
        },
      ],
    },
    {
      id: 'tourney_ai_mode',
      title: 'Modo Tourney IA',
      description:
        '<p>¡El modo "Tourney IA " le permite a Tourney IA Bot crear, Iniciar y operar torneos por sí mismo!</p> <p><i>** Tenga en cuenta que este modo solo estará disponible para los administradores del servidor. Otros roles con permiso de torneo no tendrán acceso a este modo.</i></p> <p><i>** Solo los juegos en modo de soporte están disponibles para el modo IA. (es decir, PUBG M, Free Fire excluido)</i></p>',
      navSectionItems: [
        {
          title:
            '1. En su tablero, hay un botón de Torneo AI. Haz click en eso.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. En la página de configuración de Bot, primero seleccione su servidor del menú desplegable. Luego haga clic en Habilitar AI.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Puede agregar Tourney Bot a su servidor seleccionando Agregar servidor aquí si Tourney Bot aún no se ha instalado.',
                'Al hacer clic en el botón Habilitar AI, se abrirá un nuevo menú para usted.',
              ],
            },
          ],
        },
        {
          title: '3. Configuración del moderador',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Modo Moderador: sus administradores se enumerarán aquí. Cada moderador puede tener diferentes configuraciones. Seleccione el administrador que desea usar.',
                'Roles a mencionar: en esta sección, tendrás que decirle al robot de AI qué roles hacer ping para cada juego de torneo de AI. Si no selecciona el rol, el robot de AI mencionará @todos los que no desee.',
                'Hacer coincidir la visibilidad del canal: seleccione un rol que desee que tenga visibilidad para los canales privados del torneo.',
              ],
            },
          ],
        },
        {
          title: '4. Configuración del juego',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Activar selección automática: si activa esta opción, el robot de AI decidirá qué juego será el más popular para su servidor para que no tenga que elegir manualmente.',
                'Si la opción Activar selección automática está desactivada, simplemente debe seleccionar los juegos que desea que tengan torneos en su servidor. AI bot solo ejecutará torneos dentro del grupo de juego seleccionado.',
              ],
            },
          ],
        },
        {
          title: '5. Configuración del horario',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Elige horas automáticamente: si activas esto, el robot de AI decidirá qué hora atraerá a la mayoría de los participantes y lanzará torneos en ese momento.',
                'Si la opción Elegir horas automáticamente está desactivada, simplemente debe seleccionar el rango de tiempo que desea que el robot de AI inicie torneos. AI bot lanzará torneos dentro del rango de tiempo seleccionado.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Lista completa de comandos de discord',
      navSectionItems: [
        {
          title: '1. Utilizable en el lobby del torneo',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong> : Esto permitirá que el proceso de registro comience por usted. Solo se puede usar después de que el registro haya comenzado.',
                '<strong>!unregister</strong> : Esto eliminará su lugar del registro y también de su equipo.',
                '<strong>!timer</strong> : Esto te dirá la siguiente etapa del proceso del torneo y cuánto tiempo queda hasta esa etapa.',
                '<strong>!myteam</strong> : Esto le dirá quién está en su equipo y su estado de registro.',
              ],
            },
          ],
        },
        {
          title: '2. Utilizable en MD con Tourney Bot',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> : Esto registrará un nuevo equipo en la lista. Serás la única persona en ese equipo hasta que compartas el código del equipo y hagas que otros se unan a tu equipo.",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Esto lo colocará en el equipo existente que otra persona ha creado.",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Esto te registrará para un torneo en solitario.",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : Si hay un requisito de check-in y si el tiempo de check-in ha comenzado, esto le permitirá registrarse y completar su registro.",
              ],
            },
          ],
        },
        {
          title: '3. Utilizable en Game Lobby',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> : Así es como enviar el resultado de tu partida al bot. Se requiere que adjunte una captura de pantalla de su pantalla de victoria junto con el comando.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Creando un nuevo torneo',
      description:
        '<i>Paso 1)~2) son exactamente los mismos que se muestran arriba en la sección Configuración de Tourney Bot para su servidor Discord. Si ya ha realizado estos pasos, puede pasar al paso 3).</i>',
      navSectionItems: [
        {
          title:
            '1. Desde su menú principal a la izquierda, haga clic en el botón "Crear torneo"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Desde la página de Plantillas de torneo, busca el juego para el que deseas crear el torneo y haz clic en Personalizar.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. En la página "Personalizar torneo", desplácese hasta el final y seleccione Configuración avanzada.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'El aviso le pedirá que confirme esta acción. Simplemente seleccione Continuar.',
              ],
            },
          ],
        },
        {
          title: '4. Complete la sección Información básica',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Nombre del torneo: escriba el nombre del torneo. Esto aparecerá como el título de su Categoría en su Discord. Las letras se mostrarán en mayúsculas. Los emojis están permitidos en esta sección.',
                'Juego: elija su juego, luego elija su formato de juego. (ej. PUBG M -> Duo) Esto decidirá si tu torneo será un torneo entre corchetes o un torneo cabildeado.',
                'Programa: Elija su hora de inicio de inscripción, hora de finalización de inscripción y hora de inicio del torneo. Estas fechas se mostrarán en la parte inferior del anuncio del torneo. <div class=\'inner-content\'> <p>Hora de inicio de registro: es cuando los jugadores podrán comenzar a registrarse para su torneo en el canal Discord. Antes de este tiempo, los jugadores no podrán registrarse, y el comando "!Registrarse" no funcionará en el canal.</p> <p>Hora de finalización del registro: después de este tiempo, los jugadores ya no podrán registrarse. La hora de finalización del registro no puede ser inferior a 10 minutos antes de la hora de inicio del torneo. El proceso de registro solo puede comenzar después de que finalice el registro. Además, solo puede crear corchetes o lobby después de que finalice el registro. </p> <p>Hora de inicio del torneo: esta es la hora en que comienza su torneo.</p> </div>',
                'Transmisión: si eres un transmisor y quieres anunciar tu canal de transmisión junto con el anuncio del torneo, haz clic en "Habilitar enlace" y coloca tu enlace de transmisión aquí.',
                'Región: Seleccione su país aquí. Esto decidirá en qué idioma estarán los textos genéricos en el anuncio. (ej. EE. UU. -> Los textos genéricos del anuncio estarán en inglés).',
              ],
            },
          ],
        },
        {
          title: '5. Complete la sección Detalles',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Descripción: Puedes poner información general sobre tu torneo aquí. (por ejemplo, fecha y hora, modo de juego, límite de jugador, hora de registro, etc.) Esta información se mostrará en el anuncio en la parte superior del anuncio, justo debajo del título.',
                'Reglas: puedes poner cualquier regla específica que quieras agregar a tu torneo. (por ejemplo, prohibición, límite de tiempo, mejor de 3, etc.) Esta información se mostrará en el anuncio justo debajo de la Descripción.',
                'Premios: puede poner la información de su premio en esta sección. Sea lo más específico posible; los jugadores son sensibles sobre los premios y la cantidad en dólares. Esta información se mostrará en el anuncio justo debajo de las Reglas.',
              ],
            },
          ],
        },
        {
          title: '6. Complete la sección de Plataforma',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Elija plataforma: elija discord',
                'Discord Server: elige el servidor en el que deseas anunciar tu torneo.',
                'Roles a mencionar: Este es el rol que el torneo hará ping cuando se anuncie en Discord.',
                'Mostrar a los roles: Este rol podrá ver el anuncio del torneo y los canales sin que se los pinche. (El rol recomendado es @everyone a menos que quieras hacer un torneo privado).',
                'Visibilidad del canal: cuando creas un grupo/lobby, el bot creará canales privados para jugadores registrados. El rol que seleccione aquí podrá ver esos canales privados. Por lo tanto, seleccione un rol con el que usted (administrador del torneo) esté etiquetado. De lo contrario, no podrá ver los canales privados.',
              ],
            },
          ],
        },
        {
          title: '7. Complete la sección Configuración de partidos',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Formato del torneo: Esto ya lo decide el juego y el formato del juego que seleccionó en la sección Información básica.',
                'Registro individual (solo para eventos de equipo): marque esta opción si desea formar equipos al azar y no permitir equipos prefabricados.',
                'Máx. Jugadores/equipos permitidos: seleccione el equipo máximo que desea permitir.',
                'Número de ganadores: seleccione el número de ganadores que desea. (1~3)',
                'Registro: haga clic aquí si desea habilitar el proceso de registro para su torneo. Los jugadores registrados deben registrarse para participar en el evento.',
                'Hora de registro: esta vez decidirá cuánto tiempo de registro va a permitir antes de que comience el torneo. Hay una ventana predeterminada de 10 minutos entre el check-in y la hora de inicio del torneo. Esta ventana es ajustable. (por ejemplo, si selecciona 20 minutos, el proceso de registro comenzará 30 minutos antes del torneo y finalizará 10 minutos antes de la hora del torneo).',
                'Lista de espera: marque esta opción si desea habilitar la lista de espera para su torneo. Cuando esté apagado, podrá recibir jugadores hasta el máximo de jugadores / equipos que seleccionó anteriormente.',
                'Publicar resultados automáticamente: al marcar esto, está permitiendo que los bots se hagan cargo de la verificación de resultados para cada ronda. (por ejemplo, el Equipo1 envía los resultados al bot -> El bot le pregunta al Equipo2 si el resultado es verdadero -> Si el Equipo2 confirma o no responde, el bot avanza para avanzar al Equipo1 con la necesidad de interferir). Al marcar esto, verificará cada Resultados del partido y ganadores avanzados manualmente.',
                'Permitir equipo incompleto (solo para eventos de equipo): al marcar esto, los jugadores podrán registrarse como equipo incluso si su equipo no está completo. Esto es útil cuando desea permitir que los líderes de equipo inscriban primero a su equipo para ahorrar un lugar en el torneo. Si esto está desactivado, el registro solo se completará cuando todos los miembros de cada equipo hayan finalizado su registro individual.',
              ],
            },
          ],
        },
        {
          title: '8. Haga clic en Crear para continuar',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'Haciendo clic en<i>Crear</i> no anuncia el torneo de inmediato. La herramienta del torneo pregunta de inmediato si quieres <i>Publicar</i>el torneo. <i>Publicación</i>anunciará el torneo en tu servidor Discord. Siempre puedes <i>Publicar</i>luego haciendo clic en <i>despues.</i>',
                'Asegúrate de revisar toda la información antes de publicar tu torneo. Una vez publicado, no podrá editar el anuncio.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Tablero de torneos',
      navSectionItems: [
        {
          title:
            '1. Una vez que haya creado su torneo, podrá ver su torneo en la lista del Tablero.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Haga clic en un torneo para ver detalles y jugadores registrados, para administrar grupos y grupos de presión, y para enviar premios. (La función de premio solo está disponible para torneos de socios game.tv en el servidor BlueStacks Discord).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Editar: puede cambiar la información que desee con este botón. Tenga en cuenta que la edición de información en la herramienta no cambiará la información que ya se anunció en su servidor Discord.',
                'Publicar / Anular publicación: si solo creó su torneo y aún no lo publicó, puede hacer clic en el botón Publicar para publicarlo. Si ya publicó su torneo, pero quiere esperar para obtener un nuevo registro, puede hacerlo haciendo clic en Anular publicación. (Anular publicación no eliminará ni eliminará el anuncio en su servidor Discord).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'Durante el período de registro',
      navSectionItems: [
        {
          title:
            '1. Durante este período, los usuarios de Discord podrán registrarse en el canal #lobby-lobby escribiendo el comando "!Register" si el registro está abierto en ese momento.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. Tan pronto como se ingrese el comando "!Register", los usuarios recibirán un mensaje directo de Tourney Bot, pidiéndoles más información sobre su ID dentro del juego y el nombre del equipo.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. Una vez que el usuario responda al Tourney Bot usando los comandos correctos en DM, recibirá un mensaje de finalización del registro del Bot. (Si no recibieron el mensaje de finalización, entonces no están registrados para el torneo y deberían intentar registrarse desde el principio nuevamente).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'Tan pronto como se complete el proceso de registro, el participante recibirá un nuevo rol; El nombre del rol es exactamente el mismo que el nombre de su torneo.',
              ],
            },
          ],
        },
        {
          title:
            '4. A medida que los usuarios de Discord se registren para el torneo, podrá ver cuántos usuarios se han registrado para su torneo en nuestro tablero. También puede verificar sus nombres, eliminar jugadores o eliminar equipos de esta herramienta.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png',
            },
          ],
        },
        {
          title:
            '5. Si el check-in está activado, el proceso de check-in comenzará en el momento que haya configurado. (por ejemplo, si establece 30 minutos como tiempo de registro, el proceso de registro comenzará 30 minutos antes del torneo).',
        },
        {
          title:
            '6. Tanto los usuarios registrados como los usuarios de la lista de espera recibirán una solicitud de registro de Tourney Bot por mensaje directo en Discord. Los usuarios deben seguir las instrucciones del Tourney Bot y el comando de ingreso de entrada correctamente para calificar para el evento.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. Los usuarios recibirán un mensaje de finalización de registro de Tourney Bot si ingresaron el comando de registro correctamente.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_bracketed',
      title: 'Coordinación de torneo - Competencia entre Grupos',
      navSectionItems: [
        {
          title:
            '1. Hay 3 condiciones que te permiten crear un soporte para tu torneo:',
          innerContentList: [
            {
              steps: [
                'a. Tu torneo está lleno y no permitiste la lista de espera.',
                'b. Su registro ha finalizado y no habilitó el proceso de registro.',
                'c. Su registro y check-in han finalizado. (10 minutos antes del horario del torneo)',
              ],
            },
          ],
        },
        {
          title:
            '2. Una vez que se cumpla cualquiera de estas 3 condiciones, verá el botón Crear grupos en la pestaña Paréntesis. Haga clic en él para crear su soporte.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Tan pronto como se cree el soporte en su herramienta de torneo, se anunciará el mismo soporte en el canal Discord, haciendo ping a todos los participantes registrados en el torneo.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png',
            },
          ],
        },
        {
          title:
            '4. Junto con el anuncio de soporte, el bot también creará canales privados para todos los partidos en vivo. Cada canal privado solo invita a los participantes del partido. Los participantes pueden usar este canal privado para comunicarse entre ellos acerca de su partido (es decir, compartir el código de la sala, compartir el ID del jugador) y reportar el resultado',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. Los jugadores deben informar los resultados en el canal privado, utilizando el comando "!result<team name>". La captura de pantalla debe adjuntarse para que el comando! Result se registre correctamente.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Una vez que el resultado se envíe correctamente, el bot responderá con la confirmación.',
              ],
            },
          ],
        },
        {
          title:
            '6. Una vez que se envía un resultado, aparecerá un punto rojo en el partido para que usted (administrador del torneo) pueda ver que el resultado ha sido enviado.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'Si "Publicar resultados automáticamente" está activado, el bot tomará el primer resultado enviado como el verdadero resultado. Si no se presenta un nuevo resultado en 5 minutos, el bot avanzará al equipo ganador en la presentación del primer resultado.',
                'Si "Publicar resultados automáticamente" está desactivado, tendrá que mirar el archivo adjunto, verificar el resultado y luego avanzar al ganador manualmente. (es decir, haga clic en el ganador, luego seleccione Actualizar resultado).',
              ],
            },
          ],
        },
        {
          title:
            '7. Una vez que el soporte llegue al final y se seleccione el ganador final, el bot anunciará al ganador en el canal del torneo automáticamente.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_lobbied',
      title: 'Coordinación de torneo - Competencia entre Lobbies',
      navSectionItems: [
        {
          title:
            '1. Hay 3 condiciones que te permiten crear grupos de presión para tu torneo:',
          innerContentList: [
            {
              steps: [
                'a. Tu torneo está lleno y no permitiste la lista de espera.',
                'b. Su registro ha finalizado y no habilitó el proceso de registro.',
                'c. Su registro y check-in han finalizado. (10 minutos antes del horario del torneo)',
              ],
            },
          ],
        },
        {
          title:
            '2. Una vez que se cumpla cualquiera de estas 3 condiciones, verá el botón Crear lobby en la pestaña Lobby. Haz clic en él para crear tus lobbies.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. Para cada lobby, haga clic en el botón de menú de 3 líneas, luego haga clic en Crear canal. Hacerlo creará un canal privado de Discord para cada lobby estrictamente para los jugadores en cada lobby.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png',
            },
          ],
        },
        {
          title:
            '4. Si usted (administrador del torneo) desea enviar un mensaje a cada lobby (es decir, código de partido y pw), puede usar la función Enviar mensaje desde cada lobby. El remitente será el Torneo (bot), por lo que es probable que llame la atención de los jugadores. O puede enviar un mensaje directamente en el canal escribiéndolo. (Enviar será usted en este caso).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png',
            },
          ],
        },
        {
          title:
            '5. Si no está creando cada partido para los jugadores, simplemente puede asignar un jugador en cada canal privado para crear una sala de juegos y compartir código/pw.',
        },
        {
          title:
            '6. Los jugadores pueden informar los resultados en el canal privado, utilizando el comando “!result <team name>”. La captura de pantalla debe adjuntarse para que el comando! Result se registre correctamente.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Una vez que el resultado se envíe correctamente, el bot responderá con la confirmación.',
              ],
            },
          ],
        },
        {
          title:
            '7. Una vez que se envíe un resultado, aparecerá un punto rojo en el partido para que usted (administrador del torneo) pueda ver que el resultado ha sido enviado. Haga clic en Ver resultados para ver las capturas de pantalla enviadas.',
          innerContentList: [
            {
              imageCaption:
                'No necesita esperar el envío del resultado si ya conoce el resultado. (es decir, si estaba viendo el partido, lo más probable es que ya conozca el resultado).',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png',
            },
          ],
        },
        {
          title: '8. Para seleccionar los ganadores de cada lobby,',
          innerContentList: [
            {
              imageCaption:
                'Haga clic en el botón de menú de 3 líneas, luego haga clic en el botón Grabar puntaje.',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Registre los puntajes de los jugadores de acuerdo con los resultados presentados. (Los jugadores ganadores deberían obtener puntuaciones más altas).',
                'Para una partida de varias rondas, haga clic en el botón Crear ronda en la parte inferior. Luego registre más puntajes de acuerdo con los resultados.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: [
                'Una vez que haya terminado la grabación, haga clic en Actualizar.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Transferencia de jugadores a nuevos lobbies',
      navSectionItems: [
        {
          title:
            '1. Si necesita tener un torneo de cabildeo donde los jugadores avanzan / se transfieren a nuevos grupos de presión, debe seleccionar "Eliminación" en Formato de torneo.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Conteo de Lobby: cuántos lobbies iniciales quieres tener para tus rondas preliminares',
                'Conteo de equipos: ¿Cuántos equipos habrá para cada lobby?',
              ],
            },
            {
              imageCaption:
                '<i>* Si crea un torneo de Lobby Único o de Lobbies Múltiples, no tendrá la opción de crear nuevos lobbies y, por lo tanto, no podrá mover / avanzar jugadores a nuevos lobbies. Como puede ver en el ejemplo a continuación (torneo de Lobbies Múltiples), falta el botón "+" para crear un nuevo lobby.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. Si se selecciona "Eliminación" como su formato de torneo, verá una opción para crear un nuevo lobby además de los recuentos de lobby iniciales que seleccionó.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. Mientras sus grupos de presión iniciales todavía están activos, haga clic en el botón "+" para crear un nuevo grupo de presión. Este nuevo lobby es donde avanzarás / transferirás a tus jugadores para una ronda futura.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'El nuevo lobby debe estar vacío cuando lo cree.',
                'Si necesita crear múltiples lobbies nuevos, simplemente haga clic en el botón "+" nuevamente.',
              ],
            },
          ],
        },
        {
          title:
            '4. Para avanzar / transferir jugadores al nuevo lobby, primero debe FINALIZAR los lobbies existentes. (Por favor refiérase a la sección<a href=\'how-to-use-tourney?tab=tournament-lobbied-competition\'>Finalizando un Torneo - Competencia de Lobbies</a> sobre cómo finalizar un lobby) Una vez que finalice sus lobbies, haga clic en el botón "Editar Lobby" en su nuevo lobby. ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* ¡Ten cuidado de no terminar todo el torneo! Cuando finalizas todos los lobbies, la herramienta te abrirá una ventana emergente que te preguntará si deseas finalizar el torneo. Si finalizas tu torneo, NO podrás transferir jugadores ni agregar nuevos grupos de presión.</i>',
              ],
            },
          ],
        },
        {
          title: '5. Seleccione un lobby desde el que desea mover jugadores.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'Puede hacer clic en Agregar lobby para hacer transferencias masivas desde múltiples lobbies.',
                'En este ejemplo, solo finalizan el Lobby 1 y el Lobby 2. El lobby 3 todavía está en vivo. Es por eso que solo ves los Lobby 1 y 2 como opciones.',
              ],
            },
          ],
        },
        {
          title:
            '6. Seleccione las posiciones de los jugadores que desea mover.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Puede seleccionar posiciones múltiples.',
                'La posición se refiere a la ubicación del jugador después de que el lobby ha finalizado. (Posición 1 = jugador de 1er lugar/equipo en ese lobby)',
                'Por ejemplo, si desea avanzar a los 2 mejores jugadores del Lobby 1, seleccionaría las posiciones 1 y 2.',
              ],
            },
          ],
        },
        {
          title:
            '7. Una vez que haya terminado de seleccionar los jugadores que desea transferir, haga clic en el botón Guardar. ¡Transferencia completada!',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png',
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'Finalizando un torneo - Competencia entre Grupos',
      description:
        'Tu torneo finalizará automáticamente tan pronto como el ganador final sea seleccionado en la pestaña de Grupos.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Finalizando un Torneo - Competencia entre Lobbies',
      navSectionItems: [
        {
          title:
            '1. Una vez que todos los lobbies se actualicen con puntajes precisos y ganadores, haga clic en el botón de menú de 3 líneas, luego haga clic en el botón Finalizar lobby para cada lobby. Haga esto para todos los lobbies. (Es una buena práctica finalizar el lobby tan pronto como se haya actualizado. No podrá mover jugadores si los lobby no se terminan).',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Una vez que finalicen todos los lobbies, la herramienta game.tv te dirá que tu torneo terminará y que los resultados serán publicados.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'Si desea finalizar el torneo y publicar resultados, haga clic en <i>Continuar.</i>',
                'Si no desea finalizar el torneo ni publicar resultados, haga clic en <i>Cerrar.</i>(Tu torneo no terminará y los resultados no se publicarán). ',
                'Habrá una opción para finalizar el torneo y publicar los resultados si elige <i>Cerrar.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Envío de premios a los ganadores',
      description:
        '<p><i>** Esta función solo está disponible para los socios de game.tv que están produciendo torneos en los servidores de BlueStacks Discord.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Una vez que los ganadores estén seleccionados y el torneo haya finalizado correctamente, podrá ver a los ganadores en la pestaña Premios.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. Simplemente complete la información de cada ganador.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'Asegúrese de verificar la preferencia del premio con sus ganadores (es decir, región, tipo de premio, etc.)',
                "Algunas opciones pueden no estar disponibles para ciertas regiones. Para ver todas las opciones de premios disponibles, visite <a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                'Puede configurar múltiples premios para cada ganador. (por ejemplo, para el premio de $20 de Google Play (EE.UU.), deberá configurar hasta dos de los premios de $10 de Google Play (EE.UU).)',
                "(Para NA) En general, estamos de acuerdo con gastar hasta $4 más para encontrar una opción/cantidad de premio adecuada. Para Steam, <div class='inner-content'> - Por $5/$10, utilice Steam (Hong Kong) 40 HKD/80 HKD respectivamente.<br> - Por $20/$25, utilice Steam (Malasia) RM 80/RM 100 respectivamente. </div>",
              ],
            },
          ],
        },
        {
          title:
            '3. Después de completar toda la información con precisión, haga clic en el botón Enviar premio.',
          innerContentList: [
            {
              steps: [
                'Esto enviará una solicitud de distribución de premios al administrador de game.tv. Revisarán la información del premio, luego aprobarán o rechazarán la solicitud.',
                'Una vez que se aprueba la solicitud, los ganadores recibirán un MD de Tourney Bot que contiene códigos de regalo canjeables. También verá que la entrega se ha completado en la pestaña Premios.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Clonación de torneos existentes',
      description:
        '<p>Al clonar torneos existentes, el anfitrión de torneos puede duplicar fácilmente torneos del mismo formato una y otra vez sin tener que configurar los detalles cada vez. <br /><i>** No puedes clonar un torneo y cambiar su modo de torneo: lobby vs. grupo.</i> </p>',
      navSectionItems: [
        {
          title:
            '1. Encuentra un torneo que quieras duplicar desde tu panel de control. En el extremo derecho del torneo, haz clic en el botón de menú de 3 puntos.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Si ya ha finalizado el torneo, el botón Editar y Pausa no estará disponible.',
                'Si ya has limpiado el torneo, el botón Limpiar no estará disponible.',
              ],
            },
          ],
        },
        {
          title:
            '2. Haga click en <i>Clonar</i>. Aparecerá una nueva pantalla donde tendrá que ingresar información mínima.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Nombre del torneo: Esto no se transferirá del torneo existente. Tendrás que ingresar un nuevo nombre para el torneo',
                'Servidor de Discord: esto se transferirá del torneo existente. Elige un servidor diferente si quieres duplicar el torneo existente a otro servidor.',
                'Juego: los modos de juego se transferirán del torneo existente. Personalice la configuración si desea cambiar.',
                'Horario: El horario no se transferirá del torneo existente. Deberá ingresar un nuevo horario.',
                'Premios: la información del premio se transferirá del torneo existente. Edite si desea cambiar.',
                'Transmisión: Esto se transferirá del torneo existente. Edite si desea cambiar.',
                'Configuración avanzada: si desea cambiar otros detalles de configuración, haga clic en esta opción para acceder a las opciones de configuración originales.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
