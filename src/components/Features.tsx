  const filteredFeatures = selectedCategory
    ? features.filter(f => f.category === selectedCategory)
    : features;