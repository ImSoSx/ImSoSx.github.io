---
title: Guia - Optimizacion
date: 2023-02-03
categories: [Guias, Software]
tags: [software, configuracion, optimizacion, herramientas] # TAG names should always be lowercase
---
## Info

**Guia enfocada para windows 10/11.**

En esta guia se encuentran algunas cosillas que le realizo a los equipos para que rindan un poco mejor, deshabilitando servicios innecesarios o funciones que no se utilizan pero ahi estan funcionando en segundo plano.
Con esto se lograra que tu pc ande un poco mas responsivo y ligero. talvez un aumento de fps en algunos juegos como efecto de ello, pero la principal idea es hacer que el sistema ande mas ligero.

Estara hecha algo rapido, puede tener alguna falta de explicacion o algo asi.... Nunca he hecho guias asi que ojala se entienda todo u u.

Bueno comenzemos...

## Antes de empezar

Antes de realizar cualquier modificacion se recomienda tener windows actualizado y crear un punto de restauracion, ya que si llega a ocurrir algun error o mal funcionamiento con algunos ajustes. podras restaurar el equipo sin problemas.

(A menos que te de igual y a formatear nomas)

### Windows Update

Entonces empezamos con las actualizaciones de windows.

- Busca "Configuracion"
- Ve a "Windows Update" y has clic en buscar actualizaciones

Y Esperas a que se actualize el sistema. Una vez termine proseguimos con el punto de restauracion.

### Punto de Restauracion

Para realizar un punto de restauracion debes:

- Buscar "Crear un Punto de Restauracion"

![Desktop View](/assets/images/guide/optimization/01_Crear-Punto-de-Restauracion-01.png)

- Luego has clic en "Crear"

![Desktop View](/assets/images/guide/optimization/01_Crear-Punto-de-Restauracion-02.png)

- Finalmente pone un nombre descriptivo al punto de restauracion y has clic en crear.

![Desktop View](/assets/images/guide/optimization/01_Crear-Punto-de-Restauracion-03.png)

- Esperar a que termine y listo, eso era todo :D

Una vez hecho proseguimos...

## Herramientas a utilizar

Utilizaremos dos herramientas que nos ayudaran de manera automatica a optimizar y configurar nuestro windows, estas son:

- [Optimizer](https://github.com/hellzerg/optimizer){:target="\_blank"}
- [O&O ShutUp10++](https://www.oo-software.com/en/shutup10){:target="\_blank"}

Una vez descargadas continuamos.

## Utilizando Optimizer

Teniendo el ejecutable descargado, nos aseguramos de deshabilitar el antivirus por unos minutos. para que no detecte el software como malicioso.
(Tranquilo es falso positivo porque modifica ajustes del sistema que windows no quiere que modifiques....)

Luego de deshabilitarlo abrimos el ejecutable sin problema. Para hacerlo mas sencillo pondre capturas de las opciones que eligo, para que puedas replicarlas sin problemas.
Entonces...

- Al abrirlo te pedira seleccionar un idioma, seleccione el que gustes ya que los ajustes se encuentran en el mismo orden independiente del idioma

![Desktop View](/assets/images/guide/optimization/02_optimizer-01.png)

- Seleccionar los siguientes ajustes:

![Desktop View](/assets/images/guide/optimization/02_optimizer-02.png)

- Luego en la pestaña siguiente seleccionamos:

![Desktop View](/assets/images/guide/optimization/02_optimizer-03.png)

- Finalmente desinstalamos algunas aplicaciones

![Desktop View](/assets/images/guide/optimization/02_optimizer-04.png)

- Las aplicaciones a desinstalar son:
  - MicrosoftTeams
  - Microsoft.People
  - Microsoft.549981C3F6F10
  - Microsoft.BingWeather
  - Microsoft.BingNews
  - Microsoft.PowerAutomateDesktop
  - Climpchamp.Clipchamp
  - MIcrosoftCorporationII.MicrosoftFamily
  - MicrosoftCorporationII.QuickAssist
  - Microsoft.WindowsAlarms
  - Microsoft.ZuneMusic
  - Microsoft.Todos
  - Microsoft.GetHelp
  - Microsoft.ZuneVideo
  - Microsoft.WindowsMaps
  - Microsoft.Windows.Photos

- Y finalmente solo cerramos el programa

Ahora vamos por el siguiente programilla...

## Utilizando O&O Shutup10++

Este es un poco mas sencillo ademas posee explicaciones para casi todas sus opciones por si te pica la curiosidad de saber que hace

Entonces:

- Abren el software
- Hacen clic en "acciones"
- Seleccionan "Aplicar solo las configuraciones recomendadas"

![Desktop View](/assets/images/guide/optimization/03_ooshutup-01.png)

- Esperan unos segundos y lo cierran
- Les pedira crear un punto de restauracion en caso de, pero si ya lo han hecho antes solo denle a "No"
- Aprovechen de reiniciar el pc en la sugerencia que les muestra.

## Finalizando

Y veamos las diferencias

- Sin ajustes
![Desktop View](/assets/images/guide/optimization/04-no-ajustes.png)

- Con ajustes

![Desktop View](/assets/images/guide/optimization/04-si-ajustes.png)

PD: Hay consumo de cpu por que el pc esta recien reiniciando :D

Sin dudas hay cambios uwu

Hay mas cosillas que hago dependiendo del pc, las ire agregando a medida que tenga tiempo (y ganas...)

## Extra

Este apartado es por si te interesan algunos programas alternativos a los de windows, como reproductor de musica o visualizador de imagenes.

Estas alternativas son mucho mas ligeras que las que trae el sistema en si, asi que, si desinstalaste los que vienen en windows pero no quieres quedarte sin nada, puede sacar algo de aqui.

Tambien alguna que otra recomendacion extra :D

en fin

- Reproductor de Musica
  - [AIMP](https://www.aimp.ru/){:target="\_blank"} (Ligero, simple y atractivo)
  - [Foobar2000](https://www.foobar2000.org/){:target="\_blank"} (Ligero, un poco mas complejo, potente)
  - [Musicbee](https://getmusicbee.com/){:target="\_blank"} (Ideal si tienes una biblioteca de musica local)
  - [Winamp](https://www.winamp.com/){:target="\_blank"} (El legendario)

- Reproductor de Videos
  - [K-Lite Codec Pack](https://codecguide.com/download_kl.htm){:target="\_blank"} (Simple y completo)
  - [mpv](https://mpv.io/){:target="\_blank"} (Potente y personalizable)
- Editor de Imagenes (Why Not?)
  - [Paint.NET](http://paint.net/){:target="\_blank"} (El paint con esteroides, literalmente....)
- Visualizador de Imagenes
  - [ImageGlass](https://imageglass.org/){:target="\_blank"} (Potente y Bonito)
  - [JPEGView](https://sourceforge.net/projects/jpegview/files/jpegview/1.0.37/){:target="\_blank"} (Ligero, un poco complicado de configurar)
