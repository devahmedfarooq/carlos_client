interface RandomBoldProps {
    text: string;
}

const RandomBold: React.FC<RandomBoldProps> = ({ text }) => {
    const fillerWords: string[] = [
        "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are",
        "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between",
        "both", "but", "by", "can", "can't", "cannot", "could", "couldn't", "did", "didn't",
        "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for",
        "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he",
        "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself",
        "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is",
        "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my",
        "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought",
        "our", "ours", "ourselves", "out", "over", "own", "same", "she", "she'd", "she'll",
        "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the",
        "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they",
        "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too",
        "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're",
        "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's",
        "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would",
        "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself",
        "yourselves", "also", "therefore", "either", "neither", "thus", "hence", "yet", "however",
        "although", "whereas", "besides", "along", "anyway", "likewise", "furthermore", "meanwhile",
        "accordingly", "namely", "in", "order", "such", "that"
    ];

    const boldWords = (text: string): JSX.Element[] => {
        const words = text.split(' ');
        const numWords = words.length;
        const elements: JSX.Element[] | any[] = [];
        const boldedIndexes: Set<number> = new Set();

        const getRandomIndex = (avoidFiller: boolean = false, offset: number = 0, limit: number = numWords): number => {
            const availableIndexes = words
                .map((word, i) => ({ word, i }))
                .filter(({ word, i }) => i >= offset && i < limit && (!avoidFiller || !fillerWords.includes(word.toLowerCase())))
                .map(({ i }) => i);

            if (availableIndexes.length === 0) return Math.floor(Math.random() * numWords);
            return availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
        };

        let firstBoldIndex: number;

        // Case 1: String is 3-4 words or shorter
        if (numWords <= 4) {
            firstBoldIndex = getRandomIndex();
        }
        // Case 2: String is longer than 4 words
        else {
            // Bold either the central or end word
            if (Math.random() < 0.5) {
                firstBoldIndex = getRandomIndex(true, Math.floor(numWords / 2), Math.floor(numWords / 2) + 1); // Central
            } else {
                firstBoldIndex = getRandomIndex(true, Math.floor(numWords * 0.8)); // Near end
            }

            boldedIndexes.add(firstBoldIndex);

            // Additional bold words for every 5 extra words beyond the 4th
            const extraBoldCount = Math.floor((numWords - 4) / 5);
            for (let i = 1; i <= extraBoldCount; i++) {
                const extraBoldIndex = getRandomIndex(true, i * 5, (i + 1) * 5);
                boldedIndexes.add(extraBoldIndex);
            }
        }

        // Render words, bolding the selected indexes
        words.forEach((word, index) => {
            const isBold = boldedIndexes.has(index);
            const wordElement = isBold ? <strong key={index}> {word}</strong> : <span key={index}> {word}</span>;
            elements.push(wordElement);
        });

        return elements;
    };

    return <p>{boldWords(text)}</p>;
};

export default RandomBold