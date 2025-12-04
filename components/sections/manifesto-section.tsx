export function ManifestoSection() {
    return (
        <section className="py-32 md:py-48 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-2">
                    <span className="text-sm font-mono text-neutral-500">(001)</span>
                </div>

                <div className="md:col-span-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-white">
                        We build digital experiences that <span className="text-neutral-500">defy expectations.</span>
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                                NeuconLabs is a creative technology studio based in Australia.
                                We merge intelligent automation with premium design to create
                                software that feels alive.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                                We don't just write code; we engineer gravity. Our systems are
                                designed to pull users in and keep them engaged through
                                seamless interactions and rock-solid performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
