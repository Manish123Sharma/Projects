class CategoryData {
  CategoryData({required this.title, required this.items});
  final String title;
  final List<CategoryItemData> items;
}

class CategoryItemData {
  CategoryItemData({required this.image, required this.title});
  final String image;
  final String title;
}
