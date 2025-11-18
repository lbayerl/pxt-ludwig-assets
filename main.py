# % weight=100 color=#ff8800 icon="\uf03e"
# % block="Ludwig Assets"
@namespace
class ludwigAssets:
    # % block="Test-Sprite Bild"
    # % imageLiteral=1
    def testSpriteImg():
        return img("""
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
            """)
    # 
    # 1) Einfaches Test-Sprite
    # 
    # % block="erstelle Test-Sprite"
    def createTestSprite():
        s = sprites.create(img("""
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
                """),
            SpriteKind.player)
        return s
    # 
    # 2) Kleiner Hit-Soundeffekt
    # 
    # % block="spiele Test-SFX"
    def playTestSfx():
        # start frequency
        # end frequency
        # start volume
        # end volume
        # duration (ms)
        sfx = music.create_sound_effect(WaveShape.NOISE,
            500,
            100,
            255,
            0,
            200,
            SoundExpressionEffect.NONE,
            InterpolationCurve.CURVE)
        music.play(sfx, music.PlaybackMode.IN_BACKGROUND)
    # 
    # 3) Kleine Test-Musik
    # 
    # % block="spiele Test-Musik"
    def playTestMusic():
        song = music.create_song(hex("""
            30300004080004000200040008000000080004000200040008000000
            04000400080000000200040008000000080004000200040008000000
            """))
        music.play(song, music.PlaybackMode.LOOPING_IN_BACKGROUND)
    # 
    # 4) Einfaches Tile + Tilemap
    # 
    floorTile = img("""
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
        """)
    # % block="setze Test-Tilemap"
    def setTestTilemap():
        tm = tiles.create_tilemap(hex("""
                0404
                0000
                0110
                0000
                """),
            img("""
                2 2 2 2
                2 2 2 2
                2 2 2 2
                2 2 2 2
                """),
            [floorTile, sprites.castle.tile_path1],
            TileScale.SIXTEEN)
        tiles.set_current_tilemap(tm)