//% weight=100 color=#ff8800 icon="\uf03e"
//% block="Ludwig Assets"
namespace ludwigAssets {

    //% blockId="ludwig_testSpriteImg"
    //% block="Test-Sprite Bild"
    //% imageLiteral=1
    export function testSpriteImg(): Image {
        // return the image asset from the JRES / generated factory
        return assets.image`lalien`
    }
    
    //
    // 2) Kleiner Hit-Soundeffekt
    //
    //% blockId="ludwig_playTestSfx"
    //% block="spiele Test-SFX"
    export function playTestSfx() {
        const sfx = music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
        music.play(sfx, music.PlaybackMode.InBackground)
    }

    //
    // 3) Kleine Test-Musik
    //    (switch to playMelody for reliability in the block UI/runtime)
    //
    //% blockId="ludwig_playTestMusic"
    //% block="spiele Test-Musik"
    export function playTestMusic() {
        // a simple melody that's reliable and visible in the blocks UI
        music.playMelody("C D E F G A B C5", 120)
    }

    //
    // 4) Einfaches Tile + Tilemap
    //
    const floorTile = img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 . . . . . . . . . . . . . . 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `

    //% blockId="ludwig_setTestTilemap"
    //% block="setze Test-Tilemap"
    export function setTestTilemap() {
        const tm = tiles.createTilemap(
            hex`
                0404
                0000
                0110
                0000
            `,
            img`
                2 2 2 2
                2 2 2 2
                2 2 2 2
                2 2 2 2
            `,
            [floorTile, sprites.castle.tilePath1],
            TileScale.Sixteen
        )
        tiles.setCurrentTilemap(tm)
    }
}
