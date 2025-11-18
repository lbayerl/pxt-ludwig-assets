//% weight=100 color=#ff8800 icon="\uf03e"
//% block="Ludwig Assets"
namespace ludwigAssets {

//% block="Test-Sprite Bild"
//% imageLiteral=1
export function testSpriteImg(): Image {
    return assets.image`lalien`
}

    
    //
    // 1) Einfaches Test-Sprite
    //
    //% block="erstelle Test-Sprite"
    export function createTestSprite(): Sprite {
        const s = sprites.create(
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . 5 5 . . . . . . .
                . . . . . 5 5 5 5 5 5 . . . . .
                . . . . . 5 2 5 5 2 5 . . . . .
                . . . . . 5 2 2 2 2 5 . . . . .
                . . . . . 5 5 5 5 5 5 . . . . .
                . . . . . . 5 5 5 5 . . . . . .
                . . . . . . 5 5 5 5 . . . . . .
                . . . . . 5 5 . . 5 5 . . . . .
                . . . . . 5 . . . . 5 . . . . .
                . . . . . 5 . . . . 5 . . . . .
                . . . . . 5 . . . . 5 . . . . .
                . . . . . 5 . . . . 5 . . . . .
                . . . . . . 5 . . 5 . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `,
            SpriteKind.Player)
        return s
    }

    //
    // 2) Kleiner Hit-Soundeffekt
    //
    //% block="spiele Test-SFX"
    export function playTestSfx() {
        const sfx = music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)
        music.play(sfx, music.PlaybackMode.InBackground)
    }

    //
    // 3) Kleine Test-Musik
    //
    //% block="spiele Test-Musik"
    export function playTestMusic() {
        const song = music.createSong(hex`
            30300004080004000200040008000000080004000200040008000000
            04000400080000000200040008000000080004000200040008000000
        `)
        music.play(song, music.PlaybackMode.LoopingInBackground)
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
