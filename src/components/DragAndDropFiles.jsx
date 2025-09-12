import { useState } from "react";
import { Controller } from "react-hook-form";
import fileToBase64 from "../utils/fileToBase64";

const DragAndDropFiles = ({ control, name, label }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { value, onChange } }) => {
        const handleDragOver = (e) => {
          e.preventDefault();
          setIsDragging(true);
        };

        const handleDragLeave = () => setIsDragging(false);

        const handleDrop = async (e) => {
          e.preventDefault();
          setIsDragging(false);

          const files = Array.from(e.dataTransfer.files);

          if (files.length > 0) {
            const filesBase64 = await Promise.all(files.map(file => fileToBase64(file)));
            onChange([...(value || []), ...filesBase64]);
          }
        };

        const handleFileInput = async (e) => {
          const files = Array.from(e.target.files);

          if (files.length > 0) {
            const filesBase64 = await Promise.all(files.map(file => fileToBase64(file)));
            onChange([...(value || []), ...filesBase64]);
          }
        };

        const handleRemoveFile = (index) => {
          const updatedFiles = [...value];
          updatedFiles.splice(index, 1);
          onChange(updatedFiles);
        };

        return (
          <div className="mb-3 mt-3">
            {label && <label className="form-label fw-bold">{label}</label>}

            <label
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`d-flex flex-column align-items-center justify-content-center border border-2 rounded p-4 text-center ${
                isDragging ? "border-primary bg-light" : "border-secondary"
              }`}
              style={{ cursor: "pointer", minHeight: "150px" }}
            >
              <input
                type="file"
                multiple
                onChange={handleFileInput}
                className="d-none"
              />
              <p className="text-muted m-0">
                Arraste e solte seus arquivos aqui, ou{" "}
                <span className="text-primary fw-bold">clique</span> para selecionar
              </p>
            </label>

            {value?.length > 0 && (
              <ul className="list-group list-group-flush mt-3">
                {value.map((fileBase64, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                    📄 Arquivo {idx + 1}
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveFile(idx)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
};

export default DragAndDropFiles;
