import { Award, Star } from "lucide-react";

const PresidentHighlight = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      
      {/* Decorative glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">
              Special Highlight
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
            Honored Moment with the <span className="text-green-brand">President</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A proud milestone for Sami Greenmax Landscape as our work and dedication
            received national recognition.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative group max-w-5xl mx-auto">

          {/* Glow border */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-600 opacity-30 blur-lg group-hover:opacity-50 transition" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/images/highlights/president-meeting.jpg"
              alt="Company meeting with President"
              className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-green-300" />
                <span className="text-sm uppercase tracking-wider">
                  National Recognition
                </span>
              </div>

              <p className="text-lg font-semibold">
                Sami Greenmax Landscape with the Honorable President of India
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PresidentHighlight;