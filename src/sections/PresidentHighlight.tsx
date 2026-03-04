import { Award, Star } from "lucide-react";

const PresidentHighlight = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-5">
            <Star className="w-4 h-4 text-green-brand" />
            <span className="text-sm font-medium text-green-brand">
              Special Highlight
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
            Honored Moment with the{" "}
            <span className="text-green-brand">President</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A proud milestone for Sami Greenmax Landscape as our dedication
            and environmental work received national recognition.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl group">

          {/* Image */}
          <img
            src="/images/highlights/president-meeting.jpg"
            alt="Sami Greenmax Landscape meeting the President"
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-green-300" />
              <span className="text-xs sm:text-sm uppercase tracking-wide text-green-200">
                National Recognition
              </span>
            </div>

            <p className="text-white text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PresidentHighlight;