import styles from "./App.module.scss";
import {
  HeroSection,
  ChoosingSection,
  ProductsSection,
  ExperiencesSection,
  MaterialsSection,
  TestimonialsSection,
} from "@/components/main";
import { Footer } from "@/components/footer";
function App() {
  return (
    <div className={styles.app}>
      <main>
        <HeroSection />
        <ChoosingSection />
        <ProductsSection />
        <ExperiencesSection />
        <MaterialsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
