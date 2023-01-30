---
title: Guia - Mi Configuracion PC
date: 2022-11-03
categories: [Guias, Software]
tags: [software, configuracion, optimizacion, herramientas] # TAG names should always be lowercase
---
# ========= EN DESARROLLO =========

## Primeros pasos

### Verificar correcta instalacion de Windows

- Abrir consola de comandos como administrador y escribir los siguientes comandos individualmente

  ``` Batch
  sfc /scannow
  Dism /Online /Cleanup-Image /CheckHealth
  Dism /Online /Cleanup-Image /ScanHealth
  Dism /Online /Cleanup-Image /RestoreHealth
  ```

- Reiniciar si es necesario

### Actualizar Windows

- Ir a configuracion
- Windows Update
- Buscar actualizaciones e instalarlas
- Reiniciar si es necesario

### Deshabilitar la instalacion automatica de drivers

- Clic derecho en "Este Equipo"
- Clic en propiedades
- Luego "Configuracion avanzada del sistema"
- Pestaña "Hardware
- Clic en "Configuracion de la instalacion de dispositivos"
- Selecciona "No" y luego aceptar

---

- Pulsa tecla Win + R o busca "Ejecutar" y abrelo
- Dentro de este escribe "gpedit.msc" (Solo windows Pro)
- En el editor de directivas ve a "Configuracion del Equipo - Plantillas Administrativas - Componentes de Windows - Windows Update" y selecciona "No incluyas controladores con las actualizaciones de windows"
- Habilitar y aplicar
- Se recomienda reiniciar

### Instalar la ultima version de los drivers

- Verifica si tienes la ultima version de tus drivers:
  - Intel
  - AMD
  - NVIDIA
- Instala las nuevas versiones si es necesario
  - [NVCleaninstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall/){:target="\_blank"} (Solo NVIDIA)
    - Abrelo y espera a que detecte tu grafica y dale continuar
    - Si no lo detecta selecciona manualmente el driver que deseas instalar verificando si es la version para Desktop o Notebook.
    - Una vez seleccionado el driver, apareceran multiples opciones, selecciona las que desees, aunque recomiendo pulsar "Recommended" y luego next
    - Luego de descargar seleccionar
      - "Disable Installer Telemetry & Advertising"
      - "Perform a Clean Installation"
    - Finalmente Instalar o Crear un paquete para instalarlo las veces que necesites sin tener que volver a realizar toda la configuracion

## Ajustes explorador de windows

- Habilitar vista compacta (Solo Windows 11)
- Habilitar extensiones de nombre de archivo
- Habilitar mostrar elementos ocultos
- Deshabilitar la muestra de pestañas en Alt + Tab
  - Ajustes o Configuracion
  - Sistema
  - Multitareas
  - Mostrar pestañas de microsoft edge al acoplar o presionar Alt + Tab
  - Seleccionar no mostrar pestañas

## Instalacion de Software

- Powershell (via store o github)
- Scoop
- Everything
- K-Lite Codec Pack Full
- VScode
- Git
- Node
- Spek
- Discord

### Tagscanner

- Tema: oscuro
- Quitar "Scan last work folder on startup"
- Custom Size cover: 800x800
- Filename Rename Pattern

```Text
 %disc%-%track%. %title%"
```

- Folder rename pattern:

```Text
'['%year%']' %album%
```

### Foobar2000

- Instalar los siguientes componentes:
  - [Eslyrics](https://github.com/ESLyric/release/releases){:target="\_blank"}
  - [Run services](https://www.foobar2000.org/components/view/foo_run){:target="\_blank"}
  - [Waveform minibar (mod)](https://www.foobar2000.org/components/view/foo_wave_minibar_mod){:target="\_blank"}
- Luego cargar el layout
  - Ve a ajustes o pulsa "Ctrl + P"
  - "Display - Default User Interface"
  - Pulsa "Import theme" y selecciona el layout
- Configurar Eslyrics
  - Preferences - Tools - Eslyrics
  - En Lyrics options clic en "Get More..." e instalar:
    - Genius - Minilyrics
  - En "Lyrics Save" poner "Manual Save" y luego:

      ``` Text
      Location: $directory_path(%path%)
      Filename: %filename%
      ```

  - Y aplicar

- Configurar Run Services
  - Ir a "Preferences - Tools - Run Services"
  - Eliminar todos los existentes y agregar uno nuevo:

  ``` Text
  Label: Spek
  Path: "C:\Program Files '(x86)'\Spek\spek.exe" "%path%"
  ```

  - Finalmente Aplicar

## Configuracion Extensiones Navegador

### Enhancer for Youtube

- Habilitar tema oscuro (Aunque ahora no es necesario ya que youtube lo detecta automaticamente desde los ajustes del sistema), Puedes elegir otras variantes si lo prefieres
- En Reproductor de video - Controles: Dejar solo amplificador de audio y captura de pantalla.
- Colocar los controles dentro del video.
- En "Calidad de reproduccion" es preferencial, marca "Reproducir videos automaticamente con la calidad de mi preferencia" y dejalo por defecto o cambia a las resoluciones de tu pantalla, toma en cuenta tambien la velocidad de tu internet.
- En "Volumen". Marca "Controlar el nivel de volumen con la rueda del raton.."
- En "Reproduccion Automatica". Quita "Pausar los videos automaticamente en las pestañas en segundo plano
- En "Apariencia". Marca "Activar el modo cine automaticamente".
