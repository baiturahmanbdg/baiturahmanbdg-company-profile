import Image from "next/image";
import { AppHeader } from "@/components/header";
import { AppFooter } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, Calendar, MapPin, Phone, Mail } from "lucide-react";

// Helper to find image from placeholder data
const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)!;

const heroImage = getImage("hero");
const aboutImage = getImage("about-us-pattern");
const event1Image = getImage("event-1");
const event2Image = getImage("event-2");
const event3Image = getImage("event-3");
const mapImage = getImage("map");

const prayerTimes = [
  { name: "Subuh", time: "04:45" },
  { name: "Syuruq", time: "06:05" },
  { name: "Dzuhur", time: "12:00" },
  { name: "Ashar", time: "15:20" },
  { name: "Maghrib", time: "17:55" },
  { name: "Isya", time: "19:08" },
];

const events = [
  {
    title: "Kajian Rutin Sabtu Pagi",
    date: "Setiap Sabtu, 09:00 - 11:00",
    description: "Kajian mendalam tentang fiqh dan tafsir Al-Quran bersama Ustadz terkemuka.",
    image: event1Image,
  },
  {
    title: "Program Tahfidz Anak",
    date: "Senin - Jumat, 16:00 - 17:30",
    description: "Membimbing generasi muda untuk mencintai dan menghafal Al-Quran.",
    image: event2Image,
  },
  {
    title: "Buka Puasa Bersama",
    date: "Selama Bulan Ramadhan",
    description: "Menyediakan takjil dan makan malam untuk berbuka puasa bersama seluruh jamaah.",
    image: event3Image,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative h-[60vh] md:h-[80vh] w-full">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground p-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
              Selamat Datang di Masjid Baiturahman
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
              Pusat Ibadah, Pendidikan, dan Komunitas Islam yang Damai dan Terbuka.
            </p>
            <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              <a href="#tentang">Pelajari Lebih Lanjut</a>
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="tentang" className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                Tentang Masjid Baiturahman
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  Masjid Baiturahman didirikan dengan visi untuk menjadi mercusuar iman dan pusat kegiatan komunitas Muslim. Sejak awal berdirinya, kami berkomitmen untuk menyediakan tempat ibadah yang nyaman, menyelenggarakan pendidikan Islam yang berkualitas, serta mempererat tali persaudaraan antar sesama.
                </p>
                <p>
                  Misi kami adalah menyebarkan nilai-nilai Islam yang rahmatan lil 'alamin (rahmat bagi seluruh alam) melalui program-program dakwah, sosial, dan pendidikan yang inklusif dan relevan dengan tantangan zaman.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Islamic Pattern Separator */}
        <div 
          className="h-12 bg-repeat-x opacity-50" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23559933'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 40h2l-2 2V40zm-2 2l2-2h-2v2zm40 0h2l-2 2V40zm0-40h2l-2 2V0zm-2 2l2-2h-2v2zM0 40h2l-2 2V40zm0-40h2l-2 2V0zm-2 2l2-2h-2v2z'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />

        {/* Daily Prayer Schedule Section */}
        <section id="jadwal-sholat" className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                Jadwal Sholat Harian
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Waktu sholat untuk wilayah sekitar Masjid Baiturahman.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {prayerTimes.map((prayer) => (
                <Card key={prayer.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center justify-center gap-2">
                      <Clock size={20} />
                      {prayer.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-foreground">{prayer.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events & Activities Section */}
        <section id="kegiatan" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                Kegiatan & Acara Mendatang
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Ikuti berbagai kegiatan bermanfaat di Masjid Baiturahman.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
                  <div className="relative h-56 w-full">
                    <Image
                      src={event.image.imageUrl}
                      alt={event.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={event.image.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center text-muted-foreground mb-3 text-sm">
                      <Calendar className="mr-2" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="kontak" className="py-16 md:py-24 bg-secondary/30">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">
                Hubungi Kami
              </h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold">Alamat</h3>
                    <p>Jl. Damai Sejahtera No. 123, Kota Bahagia, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold">Telepon</h3>
                    <p>(021) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>info@masjidbaiturahman.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl h-80 md:h-full min-h-[400px]">
              <div className="relative w-full h-full">
                <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
