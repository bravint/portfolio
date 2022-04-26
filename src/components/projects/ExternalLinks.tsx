import '../../styles/projects.css';

export const ExternalLinks = (props : any) => {
    const { handleCodeClick, handleDemoClick } = props;
    return (
        <section className="external-links">
            <p className="project-ext-links" onClick={handleCodeClick}>
                View Code
            </p>
            <p className="project-ext-links" onClick={handleDemoClick}>
                Live Demo
            </p>
        </section>
    );
};

export const ExternalLink = (props : any) => {
    const { handleCodeClick } = props;
    return (
        <section className="external-links">
            <p className="project-ext-links" onClick={handleCodeClick}>
                View Code
            </p>
            
        </section>
    );
};
