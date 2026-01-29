export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center px-4 py-6 sm:py-8 pb-20 sm:pb-10 text-center text-gray-500 dark:bg-darkBg">
      <section className="max-w-[28rem] px-4">
        <small className="mb-2 block text-xs sm:text-sm">
          &copy; 2025 Lucas Ostmann. All rights reserved.
        </small>
        <p className="text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold">
            How about we break the ice and start a conversation?
          </span>{" "}
          It&apos;s like adding sprinkles to the cake of life - makes everything
          more fun!
        </p>
      </section>
    </footer>
  );
}
