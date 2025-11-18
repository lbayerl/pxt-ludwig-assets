# % weight=100 color=#ff8800 icon="\uf03e"
# % block="Ludwig Assets"
@namespace
class ludwigAssets:
    # % blockId="ludwig_testSpriteImg_py"
    # % block="Test-Sprite Bild"
    # % imageLiteral=1
    def testSpriteImg():
        return assets.image("lalien")
    # 
    # 2) Kleiner Hit-Soundeffekt
    # 
    # % blockId="ludwig_playTestSfx_py"
    # % block="spiele Test-SFX"
    def playTestSfx():
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
    # % blockId="ludwig_playTestMusic_py"
    # % block="spiele Test-Musik"
    def playTestMusic():
        music.play_melody("C D E F G A B C5", 120)
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
    # % blockId="ludwig_setTestTilemap_py"
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