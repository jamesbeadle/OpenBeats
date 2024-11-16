//import { DataHashService } from "$lib/services/data-hash-service";
import { DataHashService } from "$lib/services/data-hash-service";
import { isError, replacer } from "$lib/utils/helpers";

class StoreManager {
  private dataHashService: DataHashService;

  private categories: string[] = [];

  constructor() {
    this.dataHashService = new DataHashService();
  }

  async syncStores(): Promise<void> {
    const newHashes = await this.dataHashService.getDataHashes();

    let error = isError(newHashes);
    if (error) {
      console.error("Error fetching data hashes.");
      return;
    }

    for (const category of this.categories) {
      const categoryHash = newHashes.find((hash) => hash.category === category);

      if (categoryHash?.hash !== localStorage.getItem(`${category}_hash`)) {
        await this.syncCategory(category);
        localStorage.setItem(`${category}_hash`, categoryHash?.hash || "");
      } else {
        this.loadFromCache(category);
      }
    }
  }

  private async syncCategory(category: string): Promise<void> {
    /* Example: 
       switch (category) {
      case "projects":
        const updatedProjects = await this.projectService.getProjects();
        projectStore.setProjects(updatedProjects);
        localStorage.setItem(
          "projects",
          JSON.stringify(updatedProjects, replacer),
        );
        break;
    }
      */
  }

  private loadFromCache(category: string): void {
    const cachedData = localStorage.getItem(category);

    /* Example: 
    switch (category) {
      
      case "projects":
        const cachedProjects = JSON.parse(cachedData || "[]");
        projectStore.setProjects(cachedProjects);
        break;
    }
        */
  }
}

export const storeManager = new StoreManager();
