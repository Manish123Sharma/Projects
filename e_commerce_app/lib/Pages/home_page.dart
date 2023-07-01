import '/Animation/FadeAnimation.dart';

import '/widget/categories.dart';
import '/widget/drawer_menu.dart';
import '/widget/main_image.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  static String get routeName => '@routes/home-page';
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<FadeAnimation> _appBarActions = [
    FadeAnimation(
        1.2,
        IconButton(
            icon: Icon(Icons.favorite, color: Colors.white), onPressed: () {})),
    FadeAnimation(
        1.3,
        IconButton(
            icon: Icon(Icons.shopping_cart, color: Colors.white),
            onPressed: () {})),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: DrawerMenu(),
      body: CustomScrollView(
        physics: ScrollPhysics(),
        slivers: <Widget>[
          SliverAppBar(
              backgroundColor: Colors.transparent,
              actions: _appBarActions,
              iconTheme: IconThemeData(color: Colors.white),
              expandedHeight: 500,
              flexibleSpace: FlexibleSpaceBar(
                background: MainImage(),
              )),
          SliverList(
            delegate: SliverChildListDelegate([
              Categories(),
              Categories(),
              Categories(),
            ]),
          )
        ],
      ),
    );
  }
}
