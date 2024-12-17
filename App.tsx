import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallpaper Gallery</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://wallpaperswide.com/download/sunset_312-wallpaper-2560x1080.jpg' }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={styles.heroText}>Discover Beautiful Wallpapers</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featureGrid}>
          {/* Feature 1 */}
          <TouchableOpacity style={styles.featureCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100/ff7f7f/333333' }}
              style={styles.featureImage}
            />
            <Text style={styles.featureTitle}>Nature</Text>
            <Text style={styles.featureDescription}>
              Explore stunning nature wallpapers.
            </Text>
          </TouchableOpacity>

          {/* Feature 2 */}
          <TouchableOpacity style={styles.featureCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100/7f7fff/333333' }}
              style={styles.featureImage}
            />
            <Text style={styles.featureTitle}>Abstract</Text>
            <Text style={styles.featureDescription}>
              Unique abstract designs for your phone.
            </Text>
          </TouchableOpacity>

          {/* Feature 3 */}
          <TouchableOpacity style={styles.featureCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100/7fff7f/333333' }}
              style={styles.featureImage}
            />
            <Text style={styles.featureTitle}>Technology</Text>
            <Text style={styles.featureDescription}>
              Modern tech-inspired wallpapers.
            </Text>
          </TouchableOpacity>

          {/* Feature 4 */}
          <TouchableOpacity style={styles.featureCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100/ff7fff/333333' }}
              style={styles.featureImage}
            />
            <Text style={styles.featureTitle}>Space</Text>
            <Text style={styles.featureDescription}>
              Dive into breathtaking space visuals.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Wallpaper Gallery</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#222',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  heroSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  heroImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  heroText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  featureGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  featureCard: {
    backgroundColor: '#fff',
    width: '45%',
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  featureImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#222',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default App;
