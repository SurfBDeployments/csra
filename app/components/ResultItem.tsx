import "../styles/project-home.css";



interface ResultItemProps {
    id: string;
    title: string;
    description: string;
    artifactType: string;
    author: string;
    date: string;
    size: string;
    fileName: string;
    type: "project" | "proposal";
}

export default function ResultItem({
    id,
    title,
    artifactType,
    description,
    author,
    date,
    size,
    fileName,
    type
}: ResultItemProps) {

    const detailUrl = type === "project"
        ? `/projects/${id}`
        : `/proposals/${id}`;

    return (
        <div className="result-item">
            <div className="result-title">
                <a href={detailUrl}>{title}</a>
            </div>

            <div className="result-description">
                {description}
            </div>

            <div className="metadata-item">
                <span className="metadata-label">Artifact:</span> {artifactType}
            </div>

            <div className="result-metadata">
                <div className="metadata-item">
                    <span className="metadata-label">Author:</span> {author}
                </div>

                <div className="metadata-item">
                    <span className="metadata-label">Date:</span> {date}
                </div>

                <div className="metadata-item">
                    <span className="metadata-label">Size:</span> {size}
                </div>

                <div className="metadata-item">
                    <span className="metadata-label">Filename:</span> {fileName}
                </div>
            </div>
        </div>
    );
}
